<template>
    <label>
        <select :value="value" @change="$emit('input', $event.target.value)">
            <slot></slot>
        </select>
    </label>
</template>

<script>
    export default {
        props: {
            value: String
        }
    }
</script>

<style lang="scss" scoped>
    label {
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            height: 44px;
            width: 100%;
            padding: 0 10px;
            border: 1px solid rgba(0, 0, 0, 0.12);
            font-size: 16px;
            line-height: 20px;
            border-radius: 10px;
            background: var(--background) url('../assets/icons/select-arrow.svg') right 18px center no-repeat;
        }
    }
</style>
