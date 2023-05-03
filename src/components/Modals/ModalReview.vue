<template>
         <button
            type="button"
            @click="openModal()"
            class="rounded-full bg-gray-300 bg-opacity-20 py-2 ml-1 text-sm font-medium text-gray-700 "
            >
            Review
        </button>
        <TransitionRoot
                :show="isOpen"
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >

        <Dialog as="div"  :open="set" @close="close"  class="relative z-10 ">
             <!-- Full-screen scrollable container -->
             <div class="fixed inset-0 overflow-y-auto">
                    <!-- Container to center the panel -->
                    <div class="flex min-h-full items-center justify-center p-4">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                
                        <DialogPanel class="w-full max-w-sm transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle  transition-all" >
                            <div class="flex justify-end">
                            <button type="button" class="p-2 text-xl rounded-full text-gray-300 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-blue-200"  @click="setIsOpen(false)">
                                   X                                   
                            </button>
                            </div>
                            <div class="flex justify-center">
                                <div class="text-center">
                                    <DialogTitle class="text-3xl">
                                        Ingresar Reseña 
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Your  has been successfully submitted. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="my-4">
                                <div class="flex justify-center items-center">
                                    <input type="text" id="first_name" class="bg-gray-200 w-[20rem] border border-gray-300 text-gray-900 text-sm rounded-full   block  p-2.5 dark:text-white " placeholder="John" required>
                                </div>
                                <!-- <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                        Your  has been successfully submitted. 
                                        </p>
                                </div>
                                <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                        Your  has been successfully submitted. 
                                        </p>
                                </div> -->
                            </div>

                            <div class="my-3">
                                <div class="flex justify-evenly items-center">
                                    <button class="rounded-full w-[9rem] px-3 py-3 bg-gray-500" @click="setIsOpen(false)">Cancel</button>
                                 <button class="rounded-full w-[9rem] px-3 py-3 bg-blue-500" @click="handleDeactivate">Deactivate</button>
                             </div>
                            </div>
                        </DialogPanel>
                     
                    </TransitionChild>
                </div>
                        </div>
        </Dialog>

    </TransitionRoot>
</template>

<script setup>

    import { ref } from 'vue'

    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

    //import IconTest from "@/components/Hobbies/Light/Arte.vue";

    const isOpen = ref(true)

    function setIsOpen(value) {
    isOpen.value = value
    }
    function openModal() {
    isOpen.value = true
    }

</script>