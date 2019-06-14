Function.prototype.selfCall = function (context) {
    // 设置context上下文，如果没有则默认为 window
    const selfContext = context || window;
    try {
        // __Self__Call_Fn设置为调用的方法
        selfContext.__Self__Call_Fn = this;
        // 获取第二个以及之后的参数
        const arg = [...arguments].slice(1);
        // 执行该方法赋值给 result
        const result = selfContext.__Self__Call_Fn(...arg);
        // 移除 selfContext 上的 __Self__Call_Fn 属性
        delete selfContext.__Self__Call_Fn;
        // 返回 result
        return result;
    }
    catch (e) {
        console.log(e);
        delete selfContext.__Self__Call_Fn;
    }
};
Function.prototype.selfApply = function (context) {
    const selfContext = context || window;
    try {
        selfContext.__Self_Apply_Fn = this;
        const arg = [...arguments][1];
        if (!Array.isArray(arg)) {
            throw new TypeError('apply 的第二个参数被要求是数组');
        }
        const result = selfContext.__Self_Apply_Fn(...arg);
        delete selfContext.__Self_Apply_Fn;
        return result;
    }
    catch (e) {
        console.log(e);
        delete selfContext.__Self_Apply_Fn;
    }
};
Function.prototype.selfBind = function (context) {
    const selfContext = context || window;
    try {
        selfContext.__Self_Bind_Fn = this;
        const arg = [...arguments].slice(1);
        return function () {
            selfContext.__Self_Bind_Fn(...arg);
        };
    }
    catch (e) {
        console.log(e);
        delete selfContext.__Self_Apply_Fn;
    }
};
