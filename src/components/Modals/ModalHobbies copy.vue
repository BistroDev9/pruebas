<template>
    <button
        type="button"
        @click="openModal()"
        class="rounded-full bg-gray-300 bg-opacity-20 py-2  text-sm font-medium text-gray-700 "
        >
        Elija un Hobbie
    </button>
    <TransitionRoot :show="isOpen" as="template">
        <Dialog as="div" @close="close" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-blue-700 " />
            </TransitionChild>

            <div class="fixed inset-0  backdrop-blur-sm">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                    <DialogPanel className="w-full max-w-md transform  overflow-hidden rounded-3xl z-999 justify-center bg-white p-8 text-left align-middle  transition-all" >
                      
                    <div >
                                 
                        <div class="flex justify-end w-full">
                            <button type="button" class="p-2 text-xl rounded-full text-gray-300 hover:bg-gray-200 hover:text-gray-500 "  @click="setIsOpen(false)">
                                    X
                            </button>
                        </div>

                        <div class="flex justify-center w-full ">
                            <div class="text-center">
                                <DialogTitle class="my-3 ">
                                    Crear un nuevo Hobbie
                                </DialogTitle>
                            </div>
                        </div>

                        <div class="flex justify-evenly items-center  my-2 bg-white rounded-full w-full">
                            <div class=" h-6  justify-start">
                                <p class="text-[1rem]">
                                    Nuevo Link
                                </p>
                            </div>

                            <div class=" h-3 item-center ">
                                <Write class="w-2 h-2 "/>
                            </div>
                        </div>

                        <div class="flex justify-center my-2 w-full rounded-full  bg-white">
                                <p class="text-[1rem] ">
                                    Puedes elegir un hobbie asignarle un nombre y agregar una descripcion.
                                </p>
                        </div>
                        <div class="inline-block justify-center  items-center my-2 w-full rounded-full  bg-white">
                            <div class="mx-auto w-full max-w-md max-h-64 overflow-y-auto">
                                <!-- Aqui colocamos el switch group -->
                                <SwitchGroup v-model="selected">
                                    <template v-for="option in options">
                                        <Switch
                                        v-for="option in options"
                                        :key="option.value"
                                        :value="option.value"
                                        class="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100"
                                        > 

                                        <!--  -->
                                                
                                            <div
                                                :class="[
                                                active
                                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                : '',
                                                checked ? 'bg-blue-800 bg-opacity-75 text-white ' : 'bg-white ',
                                                ]"
                                                class="relative flex cursor-pointer rounded-full px-5 py-4 mx-1 shadow-md focus:outline-none"
                                            >
                                                        <div class="flex w-full items-center justify-between">
                                                        <div class="flex items-center">
                                                            <div>
                                                                <!--  -->

                                                                <div  v-if="checked">
                                                                    <img src="{{option.icon}}" alt="{{option.title}}"                                                                      
                                                                    class="w-8 h-8 mr-3 "
                                                                    aria-hidden="true"
                                                                    />
                                                                </div>
                                                                <div v-else class="shrink-0 text-white">
                                                                    <img src="{{option.altIcon}}" alt="{{option.title}}"    
                                                                    class="w-8 h-8 mr-3 "
                                                                    aria-hidden="true"
                                                                    />
                                                                </div>


                                                                
                                                            </div>
                                                        <div class="text-sm">
                                                            <div
                                                            as="p"
                                                            :class="checked ? 'text-white' : 'text-blue-600'"
                                                            class="font-medium"
                                                            >
                                                            {{ option.titulo }}
                                                            </div>
                                                            <div
                                                            as="span"
                                                            :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                            class="inline"
                                                            >
                                                            <span>/  {{ option.description }}</span>
                                                            
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div v-show="checked" class="shrink-0 text-white">
                                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                                            <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="12"
                                                            fill="#fff"
                                                            fill-opacity="0.2"
                                                            />
                                                            <path
                                                            d="M7 13l3 3 7-7"
                                                            stroke="#fff"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            />
                                                        </svg>
                                                        </div>
                                                        </div>
                                            </div>
                              
                                       <!-- End Switch Group -->
                                        </Switch>
                                    </template>
                                    </SwitchGroup>

                            </div>
                                  
                        </div>
                        
                    

                        <div class="justify-items-center">
                            <div class="my-3">
                                <input type="text" id="musica" class="bg-gray-300  inline-flex  text-gray-600 text-sm rounded-full  w-full  p-2 dark:bg-gray-300 " placeholder="Mi Musica" required>
                            </div>

                            <div class="my-3">
                                <input type="text" id="musica" class="bg-gray-300  inline-flex  text-gray-600 text-sm rounded-full  w-full   p-2 dark:bg-gray-300 " placeholder="Mi Musica" required>
                            </div>
                        </div>
                        <div class="flex  justify-end  h-6  px-0.5 ">
                            <Button type="reset" class=" w-20  flex rounded-full justify-evenly items-center  bg-slate-600" @click="onReset">
                                <Write class="w-3 h-3  fill-gray-900" />
                                <span class="ml-1  font-medium text-xs text-black">
                                    Reset
                                </span>
                            </Button>
                        </div>
                                                    
                        <div class=" flex  justify-evenly w-full my-3">
                            <div class=" items-center">
                                <button class="rounded-full w-[9rem] px-3 py-3 bg-gray-500" @click="setIsOpen(false)">Cancelar</button>
                            </div>
                            <div class=" items-center">
                                <button class="rounded-full w-[9rem] px-3 py-3 bg-blue-500" @click="setIsOpen(false)">Registrar</button>
                            </div>
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
import { defineComponent, ref } from 'vue';
import { SwitchGroup, Switch } from '@headlessui/vue';

//Iconos Light
import Write from "@/components/Icons/Light/Write.vue";
import Arte from "@/components/Hobbies/Light/Arte.vue";
import Bicicleta from "@/components/Hobbies/Light/Bicicleta.vue";
import Billar from "@/components/Hobbies/Light/Billar.vue";
import Cocina from "@/components/Hobbies/Light/Cocina.vue";
import Ecologista from "@/components/Hobbies/Light/Ecologista.vue";
import Fe from "@/components/Hobbies/Light/Fe.vue";
import Fotografia from "@/components/Hobbies/Light/Fotografia.vue";
import Futbol from "@/components/Hobbies/Light/Futbol.vue";
import Gym from "@/components/Hobbies/Light/Gym.vue";
import Karate from "@/components/Hobbies/Light/Karate.vue";
import Moda from "@/components/Hobbies/Light/Moda.vue";
import Musica from "@/components/Hobbies/Light/Musica.vue";
import Natacion from "@/components/Hobbies/Light/Natacion.vue";
import Shopping from "@/components/Hobbies/Light/Shopping.vue";
import Skate from "@/components/Hobbies/Light/Skate.vue";
import Surf from "@/components/Hobbies/Light/Surf.vue";
import Teatro from "@/components/Hobbies/Light/Teatro.vue";
import Viaje from "@/components/Hobbies/Light/Viaje.vue";
import Videojuegos from "@/components/Hobbies/Light/Videojuegos.vue";



const isOpen = ref(true)

function setIsOpen(value) {
isOpen.value = value
}
function openModal() {
isOpen.value = true
}

//
const selected = ref(options[0].value);

return {
  options,
  selected,
};


</script>