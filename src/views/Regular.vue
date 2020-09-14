<template>
    <div class="fee-page">
        <Header title="Регулярный сбор" no-border back-button/>
        <main>
            <div class="fee-wrap">
                <div class="fee">
                    <div class="cover" v-if="!cover">
                        <input type="file" class="cover-input" ref="cover" @change="uploadCoverHandler($event)">
                        <div class="cover-block" @click="uploadCover">
                            <img src="../assets/icons/cover-icon.svg" alt="icon">
                            <span class="label">Загрузить обложку</span>
                        </div>
                    </div>
                    <div class="cover-image" v-if="cover">
                        <img class="cover-img" :src="cover" alt="cover">
                        <button class="dismiss" @click="cover = ''">
                            <img src="../assets/icons/dismiss.svg" alt="dismiss">
                        </button>
                    </div>
                    <div class="input-wrap">
                        <span class="input-label">Название сбора</span>
                        <VKInput v-model="title" placeholder="Название сбора"/>
                    </div>
                    <div class="input-wrap">
                        <span class="input-label">Сумма, ₽</span>
                        <VKInput v-model="amount" placeholder="Сколько нужно собрать?"/>
                    </div>
                    <div class="input-wrap">
                        <span class="input-label">Цель</span>
                        <VKInput v-model="target" placeholder="Например, лечение человека"/>
                    </div>
                    <div class="input-wrap">
                        <span class="input-label">Описание</span>
                        <VKTextArea v-model="description" placeholder="На что пойдут деньги и как они кому-то помогут?"/>
                    </div>
                    <div class="input-wrap">
                        <span class="input-label">Куда получать деньги</span>
                        <VKSelect v-model="payment">
                            <option value="1234">Счёт VK Pay · 1234</option>
                            <option value="5678">Счёт VK Pay · 5678</option>
                        </VKSelect>
                    </div>
                    <div class="input-wrap">
                        <span class="input-label">Куда получать деньги</span>
                        <VKSelect v-model="author">
                            <option value="1">Матвей Правосудов</option>
                            <option value="2">Правосуд Матвеев</option>
                        </VKSelect>
                    </div>
                </div>
                <div class="footer-button">
                    <Button block>Создать сбор</Button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    components: {
        Header: () => import('@/components/Header'),
        Button: () => import('@/components/Button'),
        VKInput: () => import('@/components/Input'),
        VKTextArea: () => import('@/components/TextArea'),
        VKSelect: () => import('@/components/Select')
    },
    data: () => ({
        cover: '',
        title: '',
        amount: '',
        target: '',
        description: '',
        payment: '1234',
        author: '1'
    }),
    methods: {
        uploadCover() {
            const input = this.$refs['cover']
            input.click()
        },
        uploadCoverHandler(e) {
            const files = e.target.files || e.dataTransfer.files
            if (!files.length) return

            this.createImage(files[0])
        },
        createImage(file) {
            if (file.size > 6e7) return

            const types = ['image/jpeg', 'image/png']
            if (!types.includes(file.type)) return

            const reader = new FileReader()
            reader.onload = e => {
                const image = new Image()
                image.src = e.target.result.toString()

                image.onload = () => {
                    this.cover = image.src
                }
            }
            reader.readAsDataURL(file)
        }
    }
}
</script>

<style lang="scss" scoped>
.fee-page {
    .fee-wrap {
        padding: 0 12px;
        margin-top: 4px;
        .fee {
            padding-bottom: calc(76px + env(safe-area-inset-bottom));
            .cover {
                .cover-input {
                    display: none;
                }
                margin-bottom: 26px;
            }
            .cover-image {
                height: 140px;
                width: 100%;
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                margin-bottom: 26px;
                .cover-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .dismiss {
                    border: none;
                    background-color: transparent;
                    position: absolute;
                    height: 40px;
                    width: 40px;
                    top: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
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
        }
        .footer-button {
            padding-top: 12px;
            padding-bottom: calc(12px + env(safe-area-inset-bottom));
            position: fixed;
            width: calc(100% - 24px);
            bottom: 0;
            background-color: var(--white);
        }
    }
}
</style>
