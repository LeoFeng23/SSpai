<template>
    <div id="home">
        <keep-alive>
            <div class="content">
                <router-view></router-view>
            </div>
        </keep-alive>

        <BottomNav>
            <BottomNavItem v-for="item in bottomNavItemInfo" :to="item.path" :icon="item.icon" @click.native="changeIcon(item.id)" :key="item.id"></BottomNavItem>
        </BottomNav>
    </div>
</template>

<script>
import BottomNav from "@/components/common/BottomNav/BottomNav";
import BottomNavItem from "@/components/common/BottomNav/BottomNavItem";

export default {
    name: "Home",
    components: {
        BottomNav,
        BottomNavItem
    },
    data() {
        return {
            bottomNavItemInfo: [
                {id: 0, path: '/homepage', unClickIcon: 'archive-line', clickedIcon: 'archive-fill', icon: 'archive-line'},
                {id: 1, path: '/discover', unClickIcon: 'phone-find-line', clickedIcon: 'phone-find-fill', icon: 'phone-find-line'},
                {id: 2, path: '/cart', unClickIcon: 'award-line', clickedIcon: 'award-fill', icon: 'award-line'},
                {id: 3, path: '/userinfo', unClickIcon: 'user-3-line', clickedIcon: 'user-3-fill', icon: 'user-3-line'},
            ]
        }
    },
    methods: {
        changeIcon(id) {
            this.bottomNavItemInfo.forEach(element => {
                if (element.id === id) {
                    element.icon = element.clickedIcon;
                } else {
                    element.icon = element.unClickIcon;
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .content {
      position: absolute;
      top: 0;
      bottom: 40px;
      width: 100%;
    }
</style>