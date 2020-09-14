<template>
    <label>
        <input
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
        >
    </label>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    label {
        input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            height: 44px;
            width: 100%;
            padding: 0 12px;
            background-color: var(--background);
            border: 1px solid rgba(0, 0, 0, 0.12);
            font-size: 16px;
            line-height: 20px;
            border-radius: 10px;
            &::placeholder {
                color: var(--secondary);
            }
        }
    }
</style>
