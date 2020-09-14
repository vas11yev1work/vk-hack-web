<template>
    <button :class="{
        'button': true,
        'block': block
    }" @touchstart="touchStart" @touchend="touchEnd" ref="button" @click="$emit('click')">
        <slot>Button</slot>
    </button>
</template>

<script>
    export default {
        props: {
            block: Boolean
        },
        methods: {
            touchStart() {
                const button = this.$refs['button']
                button.classList.add('active')
            },
            touchEnd() {
                const button = this.$refs['button']
                button.classList.remove('active')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        height: 36px;
        padding: 0 16px;
        background-color: var(--primary);
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
        color: var(--white);
        border-radius: 10px;
        border: none;
        &.block {
            height: 44px;
            width: 100%;
        }
        &:active, .active {
            opacity: .6;
        }
    }
</style>
