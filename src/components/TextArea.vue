<template>
    <label>
        <textarea
            :style="{height}"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
        ></textarea>
    </label>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: '64px'
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
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        padding: 12px;
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
