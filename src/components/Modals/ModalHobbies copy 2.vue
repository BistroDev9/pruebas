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
                      
                    <div>
                                 
                        <div class="flex justify-end w-full">
                            <button type="button" class="p-2 text-xl rounded-full text-gray-300 hover:bg-gray-200 hover:text-gray-500 "  @click="setIsOpen(false)">
                                    X
                            </button>
                        </div>
                        
                        <div class="flex justify-center my-2 w-full rounded-full  bg-white">
                            <p class="text-[1.2rem] font-bold text-center my-2">
                                Selecciona tu hobbie o pasatiempo favorito
                            </p>
                        </div>
                        <div class="flex justify-center my-2 w-full rounded-full  bg-white">
                                <p class="text-[0.8rem] font-light text-center my-2">
                                   Puedes elegir hasta 4 opciones, que se mostraran en tu perfil
                                </p>
                        </div>
                        <div class="inline-block justify-center  items-center my-3 w-full rounded-full  bg-white">
                            <div class="mx-auto w-full max-w-md max-h-64 overflow-y-auto">
                                <RadioGroup v-model="plan"  class="overflow-y-auto">
                                    <RadioGroupLabel class="sr-only">Hobbie</RadioGroupLabel>
                                <div class="space-y-2">
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup" value="startup" 
                                         >

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
                                                        <ArteD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Arte   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 1 -->
                                    <RadioGroupOption
                                    v-slot="{ checked }" name= "Startup" value="startup" 
                                         >

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
                                                        <BicicletaD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Bicicleta   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 2 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup3"
                                         >

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
                                                        <BillarD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Billar   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 3 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup4"
                                         >

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
                                                        <CocinaD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Cocina   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 4 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup5"
                                         >

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
                                                        <EcologistaD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Ecologista   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 5 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup6"
                                         >

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
                                                        <FeD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Fe   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 6 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup7"
                                         >

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
                                                        <FotografiaD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Fotografia   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 7 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup8"
                                         >

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
                                                        <FutbolD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Futbol   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 8 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup9"
                                         >

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
                                                        <GymD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Gym   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 9 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup10"
                                         >

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
                                                        <KarateD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Karate   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 10 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup11"
                                         >

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
                                                        <ModaD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Moda   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 11 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup12"
                                         >

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
                                                        <MusicaD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Musica   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 12 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup13"
                                         >

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
                                                        <NatacionD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Natacion   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 13 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup14"
                                         >

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
                                                        <ShoppingD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Shopping   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 14 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup"
                                         >

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
                                                        <SkateD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Skate   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 15 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup15"
                                         >

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
                                                        <SurfD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Surf   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 16 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup16"
                                         >

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
                                                        <TeatroD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Teatro   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 17 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup17"
                                         >

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
                                                        <ViajeD   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <Viaje   
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>
                                    <!-- 18 -->
                                    <RadioGroupOption
                                         v-slot="{ checked }" name= "Startup"  value="startup18"
                                         >

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
                                                        <VideoGameD
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div v-else class="shrink-0 text-white">
                                                        <VideoGame
                                                        class="w-8 h-8 mr-3 "
                                                        aria-hidden="true"
                                                        />
                                                    </div>


                                                  
                                                </div>
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                as="p"
                                                :class="checked ? 'text-white' : 'text-blue-600'"
                                                class="font-medium"
                                                >
                                                Titulo
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                as="span"
                                                :class="checked ? 'text-sky-100' : 'text-blue-500'"
                                                class="inline"
                                                >
                                                <span>/ texto de relleno</span>
                                             
                                                </RadioGroupDescription>
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
                                    </RadioGroupOption>

                                </div>
                                </RadioGroup>
                            </div>                                                       
                            <!--  -->
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

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

// Edit Icon

import Write from "@/components/Icons/Light/Write.vue";
import WriteD from "@/components/Icons/Light/Write.vue";

//
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
import VideoGame from "@/components/Hobbies/Light/Videojuegos.vue";


//Iconos Dark

import ArteD from "@/components/Hobbies/Dark/Arte.vue";
import BicicletaD from "@/components/Hobbies/Dark/Bicicleta.vue";
import BillarD from "@/components/Hobbies/Dark/Billar.vue";
import CocinaD from "@/components/Hobbies/Dark/Cocina.vue";
import EcologistaD from "@/components/Hobbies/Dark/Ecologista.vue";
import FeD from "@/components/Hobbies/Dark/Fe.vue";
import FotografiaD from "@/components/Hobbies/Dark/Fotografia.vue";
import FutbolD from "@/components/Hobbies/Dark/Futbol.vue";
import GymD from "@/components/Hobbies/Dark/Gym.vue";
import KarateD from "@/components/Hobbies/Dark/Karate.vue";
import ModaD from "@/components/Hobbies/Dark/Moda.vue";
import MusicaD from "@/components/Hobbies/Dark/Musica.vue";
import NatacionD from "@/components/Hobbies/Dark/Natacion.vue";
import ShoppingD from "@/components/Hobbies/Dark/Shopping.vue";
import SkateD from "@/components/Hobbies/Dark/Skate.vue";
import SurfD from "@/components/Hobbies/Dark/Surf.vue";
import TeatroD from "@/components/Hobbies/Dark/Teatro.vue";
import ViajeD from "@/components/Hobbies/Dark/Viaje.vue";
import VideoGameD from "@/components/Hobbies/Dark/Videojuegos.vue";


//
const plan = ref('startup')

//   const plans = [
//   {
//     name: 'Startup',
//     ram: '12GB',
//     cpus: '6 CPUs',
//     disk: '160 GB SSD disk',
//     icon: './src/assets/vue.svg',
//     altIcon: './src/assets/vue.svg',
//   },
//   {
//     name: 'Startup',
//     ram: '12GB',
//     cpus: '6 CPUs',
//     disk: '160 GB SSD disk',
//     icon: './src/assets/vue.svg',
//     altIcon: './src/assets/vue.svg',
//   },
//   {
//     name: 'Startup',
//     ram: '12GB',
//     cpus: '6 CPUs',
//     disk: '160 GB SSD disk',
//     icon: './src/assets/vue.svg',
//     altIcon: './src/assets/vue.svg',
//   },{
//     name: 'Startup',
//     ram: '12GB',
//     cpus: '6 CPUs',
//     disk: '160 GB SSD disk',
//     icon: './src/assets/vue.svg',
//     altIcon: './src/assets/vue.svg',
//   }
// ]
//



const isOpen = ref(true)

function setIsOpen(value) {
isOpen.value = value
}

function openModal() {
isOpen.value = true
}

</script>