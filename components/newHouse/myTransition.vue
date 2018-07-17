<script>
    export default {
        name: "myTransition",
        functional: true,
        render(h,context){
            let data = {
                on: transition
            };
            return h("transition",data,context.children)
        }
    }
    let transition = {
        beforeEnter(el){
            el.classList.add("_transition-box");// 为元素添加一个类名
            el.style.height = 0;
            el.style.opacity = 0;
        },
        enter(el){
            if(el.scrollHeight !== 0){//当等于0时，说明已经有别的原因介入影响了高度，此时过渡动画会自己触发
                el.style.height = el.scrollHeight + 'px';
            }
            el.style.opacity = 1;
            el.style.overflow = 'hidden';
        },
        afterEnter(el){
            el.classList.remove('_transition-box');
            el.style.height = '';
            el.style.opacity = '';
        },
        beforeLeave(el){
            el.style.height = el.scrollHeight + 'px';
            el.style.opacity = 1;
            el.style.overflow = 'hidden';
        },
        leave(el){
            if(el.scrollHeight !== 0){
                el.classList.add("_transition-box");
                el.style.height = 0;
                el.style.opacity = 0;
            }
        },
        afterLeave(el){
            el.classList.remove('_transition-box');
            el.style.height = '';
            el.style.opacity = '';
        }
    }
</script>

<style>
    ._transition-box{
        transition: height .2s ease-in-out,opacity .2s ease-in-out;
    }
</style>