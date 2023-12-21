<template>
  <div>
    <NavBar />
    <SideNavigation right-link="/about" :show-left-link="false">
      <slot />
    </SideNavigation>
  </div>
</template>
