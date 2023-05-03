<template>
        <button
            type="button"
            @click="openModal()"
            class="rounded-full bg-gray-300 bg-opacity-20 py-2  text-sm font-medium text-gray-700 "
            >
            ¿A qué te dedicas?
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
        <Dialog as="div" :open="close"  @close="setIsOpen"  class="relative z-10 rounded-3xl">

           
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                <div class="fixed inset-0 ">
            <!-- Container to center the panel -->
            <div class="flex flex-row h-screen items-center justify-center p-4">
                        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-3xl  justify-center bg-white p-8 text-left align-middle  transition-all" >
                                    
                            <div class="flex justify-end">
                                <button type="button" class="p-2 text-xl rounded-full text-gray-300 hover:bg-gray-200 hover:text-gray-500 "  @click="setIsOpen(false)">
                                        X
                                </button>
                            </div>

                            <div class="flex justify-center w-[25rem]">
                                <div class="text-center">
                                    <DialogTitle class="my-3 ">
                                        Hobbies
                                    </DialogTitle>
                                </div>
                            </div>

                            <div class="flex justify-evenly items-center my-2 bg-gray-300 rounded-full w-[25rem]">
                                <div class=" h-6  justify-start">
                                    <p class="text-[1rem]">
                                        Lorem ipsum dolor sit amet 
                                    </p>
                                </div>
                                <div class=" h-3 item-center ">
                                    <Write class="w-2 h-2 "/>
                                </div>
                            </div>

                            <div class="flex item-center my-2 w-[25rem] bg-gray-300">
                                <div class="w-64 ">
                                    <p class="text-[1rem] ">
                                        Lorem ipsum dolor sit
                                    </p>
                                </div>
                            </div>
                            
                        <div class="block   overflow-y-auto h-60 w-[25rem] item-center   bg-gray-200">

                            <span class="inline-block mx-4 whitespace-nowrap rounded-full bg-blue-700 my-4   px-3 w-[23rem] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                                
                                <div class="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                <div class="flex-shrink-0 bg-gray-100 rounded-full px-2 py-2">
                                    <Arte class="w-6 h-6 fill-blue-400"/>
                                </div>

                                <div class="grow">
                                <div class="grid sm:flex sm:justify-between sm:items-center ">
                                    <div>
                                    <!-- Tooltip -->
                                    <div class="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                                        <div class="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                                        <span class="font-semibold text-gray-800 dark:text-gray-200">
                                            Leyla Ludic
                                        </span>

                                        <!-- Dropdown Card -->
                                        
                                        <!-- End Dropdown Card -->
                                        </div>
                                    </div>
                                    <!-- End Tooltip -->

                                    <ul class="text-xs text-gray-500 list-none">
                                        <li class="block relative text-[9px] pr-6   before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                        Lorem ipsum dolor sit amet consectetur, 
                                        </li>
                                        <li class="block relative text-[9px] pr-6   before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                         adipisicing elit.
                                        </li>
                                    </ul>
                                    </div>
                                    
                                    <!-- Button Group -->
                                    <div class="my-2 ml-[4rem]">
                                    <button type="button" class="py-1 px-1   rounded-full  inline-flex justify-center items-center   border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        <!-- <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                        </svg>
                                        Tweet -->
                                        <CheckIcon class="fill-blue-500 h-3 w-3 "/>
                                    </button>
                                    </div>
                                    <!-- End Button Group -->
                                </div>
                                </div>
                        </div>
                            </span>

                           
                            

                        </div>

                            <div class=" flex  justify-evenly my-3">
                                <div class=" items-center">
                                    <button class="rounded-full w-[9rem] px-3 py-3 bg-gray-500" @click="setIsOpen(false)">Cancelar</button>
                                </div>
                                <div class=" items-center">
                                    <button class="rounded-full w-[9rem] px-3 py-3 bg-blue-500" @click="setIsOpen(false)">Registrar</button>
                                </div>
                            </div>  
                        </DialogPanel>
                    </div>
                </div>
                </TransitionChild>
              
        </Dialog>
 </TransitionRoot>
</template>

<script setup>

 import { ref } from 'vue'

 import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
 import  CheckIcon  from "@/components/Icons/Light/checkmark.vue";
 import Write from '@/components/Icons/Light/Write.vue'
 import Arte from "@/components/Hobbies/Light/Arte.vue";

 const isOpen = ref(true)

 function setIsOpen(value) {
 isOpen.value = value
 }
 function openModal() {
 isOpen.value = true
 }

</script>