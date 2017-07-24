package com.testproject;

import android.content.Intent;
import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by MrS on 2017/7/21.
 */

public class BGNativeExampleModule extends ReactContextBaseJavaModule {
    public BGNativeExampleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "BGNativeExampleModule";
    }

    @ReactMethod
    public void testToast(String message){
        Toast.makeText(getReactApplicationContext(), TextUtils.isEmpty(message)
                ? "搜索内容不能为空"
                : "搜索内容" + message, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void jumpActivity(){
        Intent intent = new Intent(getCurrentActivity(),SecondActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}
