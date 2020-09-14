<template>
    <div class="target-additionally-page">
        <Header title="Дополнительно" back-button/>
        <main>
            <div class="target-additionally">
                <div class="input-wrap">
                    <span class="input-label">Куда получать деньги</span>
                    <VKSelect v-model="author">
                        <option value="1">Матвей Правосудов</option>
                        <option value="2">Правосуд Матвеев</option>
                    </VKSelect>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            VKSelect: () => import('@/components/Select')
        },
        data: () => ({
            author: '1'
        })
    }
</script>

<style lang="scss" scoped>
    .target-additionally-page {
        .input-wrap {
            margin-bottom: 26px;
            &:last-child {
                margin-bottom: 0;
            }
            .input-label {
                font-size: 14px;
                line-height: 18px;
                color: var(--subhead);
                margin-bottom: 8px;
                display: block;
            }
        }
        .target-additionally {
            padding: 12px;
        }
    }
</style>
