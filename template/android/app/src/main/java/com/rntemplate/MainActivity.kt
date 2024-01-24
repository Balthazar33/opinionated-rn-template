package com.rntemplate

import android.app.AlertDialog
import android.content.pm.ApplicationInfo
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import androidx.preference.PreferenceManager
import android.view.inputmethod.InputMethodManager
import com.zoontek.rnbootsplash.RNBootSplash

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "RNTemplate"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
  
  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) // initialize the splash screen
    /** Check if 3rd-party keyboards are installed */
    // Check if the user has already been notified about the custom keyboard(s)-------------------------------
    val preferences = PreferenceManager.getDefaultSharedPreferences(this)
    val didNotify = preferences.getString("didNotify", "")

    if (didNotify === "") {
        if (didFindCustomKeyboard()) {
            // Store whether the user has already been notified about the custom keyboard(s)------------------
            val editor = preferences.edit()
            editor.putString("didNotify", "true")
            editor.apply()

            //Alert user--------------------------------------------------------------------------------------
            val alertDialog = AlertDialog.Builder(this@MainActivity).create()
            alertDialog.setTitle("Warning")
            alertDialog.setMessage("Third-party on-screen keyboard(s) detected. Use caution while" 
            + " entering sensitive data in the application, or consider disabling the third-party keyboard(s)."
            )
            alertDialog.setButton(
                AlertDialog.BUTTON_NEUTRAL, "OK"
            ) { dialog, _ -> dialog.dismiss() }
            alertDialog.show()
        }
    }
    super.onCreate(savedInstanceState) // super.onCreate(null) with react-native-screens
  }

  private fun didFindCustomKeyboard(): Boolean {
        val inputMethodManager = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager
        val list = inputMethodManager.enabledInputMethodList
        val n = list.size
        var numberOfCustomKeyboards = 0
        for (i in 0 until n) {
            val imi = list[i]
            if (imi.serviceInfo.applicationInfo.flags and
                ApplicationInfo.FLAG_SYSTEM == 0
            ) {
                numberOfCustomKeyboards += 1
            }
        }
        return numberOfCustomKeyboards > 0
    }
}
