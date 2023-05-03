<template>
    <div class="flex justify-center">
        <a href="#" :class="background" class="w-2/6 mx-2 h-2 rounded-full"></a>
        <a href="#" :class="background__" class="w-2/6 mx-2 h-2 rounded-full"></a>
    </div>
</template>

<script setup>

    import { computed } from 'vue'

    const props = defineProps({
        fill: {
            type: String,
            required: true,
        },
        fill__:{
            type: String,
            required: true,
        }
    })

    const colors = {
        gray: 'bg-gray-300',
        blue: 'bg-blue-300',
    }

    const background = computed(() => {
        console.log('validando 0 ');
        return colors[props.fill] ?? 'bg-gray-300'
    })
    const background__ = computed(() => {
    return colors[props.fill__] ?? 'bg-blue-300'

    })
    
</script>

<style scoped>

</style>
