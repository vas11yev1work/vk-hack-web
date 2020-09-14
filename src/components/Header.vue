<template>
    <header>
        <div :class="{
            'header': true,
            'no-border': noBorder
        }">
            <button class="back-button" v-if="backButton" @click="$router.go(-1)">
                <img src="../assets/icons/header-icon.svg" alt="back">
            </button>
            <div class="title">
                <h2>{{ title }}</h2>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Title'
            },
            backButton: Boolean,
            noBorder: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    header {
        padding-top: env(safe-area-inset-top);
        padding-left: 12px;
        padding-right: 12px;
        position: fixed;
        width: 100%;
        background-color: var(--white);
        z-index: 1000;
        .header {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 52px;
            border-bottom: 1px solid var(--light-separator);
            position: relative;
            &.no-border {
                border: none;
            }
            .back-button {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 52px;
                border: none;
                background-color: transparent;
            }
            .title {
                h2 {
                    font-weight: 600;
                    font-size: 21px;
                    line-height: 26px;
                }
            }
        }
    }
</style>
