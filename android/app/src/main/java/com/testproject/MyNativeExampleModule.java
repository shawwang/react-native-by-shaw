package com.testproject;

import android.content.Intent;
import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by shaw on 2017/7/21.
 * m
 *
 */

public class MyNativeExampleModule extends ReactContextBaseJavaModule {
    public MyNativeExampleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    /**
     * @return  返回一个字符串，这个字符串用于在JavaScript端标记这个模块
     */
    @Override
    public String getName() {
        return "MyNativeExampleModule";
    }


    /**
     * 暴露一个函数给javascript端，
     * 使用注解@ReactMethod进行标记（JavaScript端调用Android原生方法必须使用@ReactMethod注解），
     * 该函数的返回值必须为void，
     * React Native的跨语言访问是异步进行的，所以想要给JavaScript返回一个值的唯一办法是使用回调函数或者发送事件
     */
    @ReactMethod
    public void testToast(String message){//测试吐司
        Toast.makeText(getReactApplicationContext(), TextUtils.isEmpty(message)
                ? "搜索内容不能为空"
                : "搜索内容为：" + message, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void jumpActivity(){//测试跳转
        Intent intent = new Intent(getCurrentActivity(),SecondActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}
