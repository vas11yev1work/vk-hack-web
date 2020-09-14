<template>
    <div class="home-page">
        <Header title="Пожертвования"/>
        <main>
            <div class="no-fees-wrap">
                <div class="no-fees">
                    <p>У Вас пока нет сборов.<br>Начние доброе дело.</p>
                    <Button @click="$router.push('/fee-type')">Создать сбор</Button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            Button: () => import('@/components/Button')
        }
    }
</script>

<style lang="scss" scoped>
    .home-page {
        main {
            .no-fees-wrap {
                height: calc(100vh - var(--header-height));
                display: flex;
                align-items: center;
                justify-content: center;
                .no-fees {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    p {
                        color: var(--secondary);
                        font-size: 16px;
                        line-height: 20px;
                        text-align: center;
                        margin-bottom: 24px;
                    }
                }
            }
        }
    }
</style>
