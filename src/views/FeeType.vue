<template>
    <div class="fee-type-page">
        <Header title="Тип сбора" back-button/>
        <main>
            <div class="fee-type-wrap">
                <div class="fee-types">
                    <div
                        class="type"
                        ref="target"
                        @click="$router.push('/target')"
                        @touchstart="feeTypeTouchStart('target')"
                        @touchend="feeTypeTouchEnd('target')"
                    >
                        <img src="../assets/icons/target.svg" alt="icon" class="type-icon">
                        <div class="content">
                            <div class="description-wrap">
                                <h3 class="title">Целевой сбор</h3>
                                <p class="description">Когда есть определенная цель</p>
                            </div>
                            <img src="../assets/icons/fee-type.svg" alt="icon" class="fee-type-icon">
                        </div>
                    </div>
                    <div
                        class="type"
                        ref="regular"
                        @click="$router.push('/regular')"
                        @touchstart="feeTypeTouchStart('regular')"
                        @touchend="feeTypeTouchEnd('regular')"
                    >
                        <img src="../assets/icons/regular.svg" alt="icon" class="type-icon">
                        <div class="content">
                            <div class="description-wrap">
                                <h3 class="title">Регулярный сбор</h3>
                                <p class="description">Если помощь нужна ежемесячно</p>
                            </div>
                            <img src="../assets/icons/fee-type.svg" alt="icon" class="fee-type-icon">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header')
        },
        methods: {
            feeTypeTouchStart(type) {
                const feeType = this.$refs[type]
                feeType.classList.add('active')
            },
            feeTypeTouchEnd(type) {
                const feeType = this.$refs[type]
                feeType.classList.remove('active')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fee-type-page {
        .fee-type-wrap {
            height: calc(100vh - var(--header-height));
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 12px;
            .fee-types {
                width: 100%;
                .type {
                    width: 100%;
                    background-color: var(--light-background);
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    margin-bottom: 12px;
                    border-radius: 10px;
                    padding: 12px 18px 12px 14px;
                    display: flex;
                    position: relative;
                    cursor: pointer;
                    &:active,
                    .active {
                        opacity: .6;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .type-icon {
                        height: 24px;
                        width: 24px;
                        object-fit: contain;
                    }
                    .content {
                        .description-wrap {
                            padding-left: 14px;
                            .title {
                                font-weight: 600;
                                font-size: 16px;
                                line-height: 20px;
                                margin-bottom: 2px;
                            }
                            .description {
                                font-size: 13px;
                                line-height: 16px;
                                color: var(--subhead);
                            }
                        }
                        .fee-type-icon {
                            position: absolute;
                            top: 50%;
                            right: 18px;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
        }
    }
</style>
