<script setup>
import SwipeHorizontalButton  from '@/components/Shared/SwipeHorizontalButton.vue'
//Vista Icons List

//----------------------------------------------------------------------//
import Background from '@/components/Icons/Light/Background.vue'
import Dedication from '@/components/Icons/Light/Dedication.vue'
import Hobbies from '@/components/Icons/Light/Hobbies.vue'
import Keep from '@/components/Icons/Light/Keep.vue'
import Music from '@/components/Icons/Light/Music.vue'
import Name from '@/components/Icons/Light/Name.vue'
import Photos from '@/components/Icons/Light/Photos.vue'
import Quote from '@/components/Icons/Light/Quote.vue'
import Return  from '@/components/Icons/Light/Return.vue'
import Review from '@/components/Icons/Light/Review.vue'
import See  from '@/components/Icons/Light/See.vue'
import Write from '@/components/Icons/Light/Write.vue'
//----------------------------------------------------------------------//
import ModalHobbies from '@/components/Modals/ModalHobbies.vue'
import ModalName from '@/components/Modals/ModalName.vue'
//----------------------------------------------------------------------//

import ModalBackground from '@/components/Modals/ModalBackground.vue'
import ModalPerfilProf from '@/components/Modals/ModalPerfilProf.vue'

import ModalMusic from '@/components/Modals/ModalMusic.vue'
import ModalPhotos from '@/components/Modals/ModalPhotos.vue'

import ModalReview from '@/components/Modals/ModalReview.vue'
import ModalQuote from '@/components/Modals/ModalQuote.vue'

//----------------------------------------------------------------------//
//Profile Select Icon list

// import Arte from '@/components/Hobbies/Light/Arte.vue'
// import Bicicleta from '@/components/Hobbies/Light/Bicicleta.vue'
// import Billar from '@/components/Hobbies/Light/Billar.vue'
// import Cocina from '@/components/Hobbies/Light/Cocina.vue'
// import Ecologista from '@/components/Hobbies/Light/Ecologista.vue'
// import Fe from '@/components/Hobbies/Light/Fe.vue'
// import Fotografia from '@/components/Hobbies/Light/Fotografia.vue'
// import Futbol  from '@/components/Hobbies/Light/Futbol.vue'
// import Gym from '@/components/Hobbies/Light/Gym.vue'
// import Karate  from '@/components/Hobbies/Light/Karate.vue'
// import Moda from '@/components/Hobbies/Light/Moda.vue'
// import Musica from '@/components/Hobbies/Light/Musica.vue'
// import Natacion from '@/components/Hobbies/Light/Natacion.vue'
// import Shopping from '@/components/Hobbies/Light/Shopping.vue'
// import Skate from '@/components/Hobbies/Light/Skate.vue'
// import Surf  from '@/components/Hobbies/Light/Surf.vue'
// import Teatro from '@/components/Hobbies/Light/Teatro.vue'
// import Viaje  from '@/components/Hobbies/Light/Viaje.vue'
// import Videojuegos from '@/components/Hobbies/Light/Videojuegos.vue'


// Modals


</script>

<template>


    <div class="rounded-3xl bg-gray-400 p-6">

            <div class="px-6 sm:px-4">
                <SwipeHorizontalButton  class="py-6" fill="gray"  fill__="blue" />
            </div>


            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2">
                        <a class="relative inline-flex items-center ml-1 " href="#0">

                            <Name class="w-4 h-4 ml-3  fill-blue-800"/>
                        </a>

                        <div class=" pr-1 ml-2">
                            <!-- <input  @click="isOpen = true" type="text" id="nombre" class="bg-gray-300  inline-flex  text-blue-300 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Mi Nombre" required> -->
                            <ModalName/>
                        </div>
                    </div>
                </div>
                <!-- Menu button -->
                <div class="relative inline-flex  mr-3 ">
                    <Write class="w-3 h-3 mt-6 mr-3     fill-blue-800"/>
                </div>
            </div>
            <!-- 2 -->
            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2" >
                        <a class="relative inline-flex items-center ml-1 " href="#0">
                        <Hobbies class="w-4 h-4 mt-1 ml-3  fill-blue-800"  />
                        </a>

                        <div class="pl-1">
                            <!-- <input type="text" id="quien_soy" class="bg-gray-300  inline-flex  text-gray-900 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Quien Soy" required> -->
                            <ModalPerfilProf/>
                        </div>
                    </div>
                </div>
                
                <!-- Menu button -->
                <div class="relative inline-flex items-center mt-6 mr-6">
                    <Write class="w-3 h-3    ml-3   fill-blue-800" />
                </div>
            </div>
            <!-- 3 -->
            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2">
                        <a class="relative inline-flex items-center ml-1 " href="#0">

                            <Music class="w-4 h-4 ml-3 mr-2  "/>
                        </a>

                        <div class="mr-4">
                            <!-- <input type="text" id="musica" class="bg-gray-300   inline-flex  text-gray-900 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Mi Musica" required> -->
                            <ModalMusic  />
                        </div>
                    </div>
                </div>
                <!-- Menu button -->
                <div class="relative inline-flex items-center mt-3 mr-6 ">
                <!-- <Write/> -->
                <span class="bg-blue-100 text-blue-800 mt-2  w-32  font-medium mx-2 px-2 pb-1  rounded-full text-[14px] dark:bg-blue-900 dark:text-blue-300">Subir Archivos</span>

                </div>
            </div>
            <!-- 4 -->

            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2">
                            <a class="relative inline-flex items-center ml-1 " href="#0">

                                <Dedication class="w-4 h-4 ml-3  "/>
                            </a>

                            <div class=" pr-1 ml-2">
                                <!--  -->
                                
         
                            <ModalHobbies class=" fill-blue-800 mr-2  "/>
                                <!--  -->
                            </div>
                            
                            
                    </div>
                </div>
                <div class="relative inline-flex  mr-3 ">
                    <Write class="w-3 h-3 mt-6 mr-3     fill-blue-800"/>
                </div>
            </div>
            <!-- 5 -->

                <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2">
                        <a class="relative inline-flex items-center " href="#0">

                            <Background class="w-4 h-4 ml-4   fill-blue-800"/>
                        </a>

                        <div class=" pr-1  ml-2">
                            <!-- <input type="email" id="email" class="bg-gray-300  inline-flex  text-gray-900 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Frease que lo describa" required> -->
                            <ModalBackground/>
                        </div>
                    </div>
                </div>
                <!-- Menu button -->
                <div class="relative inline-flex items-center mt-3 mr-6 ">
                    <Write class="w-3 h-3   mt-3 ml-3    fill-blue-800"/>
                </div>
            </div>

            <!-- 6 -->

            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                    <!-- Image + name -->
                    <div>
                        <div class="flex my-2">
                            <a class="relative inline-flex items-center ml-1 " href="#0">

                                <Photos class="w-4 h-4 ml-3 mr-2   fill-blue-800"/>
                            </a>

                            <div class=" pr-1 ">
                                <!-- <input type="text" id="Subir_fotos" class="bg-gray-300  inline-flex  text-gray-900 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Subir Fotos" required> -->
                                <ModalPhotos/>
                            </div>
                        </div>
                    </div>
                    <!-- Menu button -->
                    <div class="relative inline-flex items-center my-3 mx-6 ">
                        <span class="bg-blue-100 w-32 text-blue-800 text-[14px] font-mediumm mt-2 mx-2 px-2  pb-1  rounded-full dark:bg-blue-900 dark:text-blue-300">Subir Fotos</span>
                    </div>
            </div>

                <!-- 7 -->

            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2">
                        <a class="relative inline-flex items-center ml-1 " href="#0">

                            <Review class="w-4 h-4 ml-3 fill-blue-800"/>
                        </a>

                        <div class=" ml-1">
                            <!-- <input type="text" id="reseña" class="bg-gray-300  inline-flex  text-gray-900 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Reseña" required> -->
                            <ModalReview/>
                        </div>
                    </div>
                </div>
                <!-- Menu button -->
                <div class="relative inline-flex items-center mt-3 mr-6 ">
                    <Write class="w-3 h-3   mt-3 ml-3    fill-blue-800"/>
                </div>
            </div>


                    <!-- 8 -->

            <div class="flex justify-between my-2 items-start bg-gray-300 rounded-full">
                <!-- Image + name -->
                <div>
                    <div class="flex my-2">
                        <a class="relative inline-flex items-center ml-1 " href="#0">

                            <Quote class="w-4 h-4 ml-3  fill-blue-800"/>
                        </a>

                        <div class=" px-1 ml-1">
                            <!-- <input type="email" id="email" class="bg-gray-300  inline-flex  text-gray-900 text-sm rounded-lg  w-64 p-2 dark:bg-gray-300 " placeholder="Frease que lo describa" required> -->
                            <ModalQuote/>
                        </div>
                    </div>
                </div>
                <!-- Menu button -->
                <div class="relative inline-flex items-center mt-3 mr-6 ">
                    <Write class="w-3 h-3   mt-3 ml-3    fill-blue-800"/>
                </div>
            </div>

                <!--  -->

            <div class="flex justify-between my-2  px-3  place-content-center w-full -gray-600  rounded  w-6/8 ">

                <div class=" inline-block   place-items-center w-1/4  py-2 my-2   rounded ">
                        <Keep  class="items-center w-9 h-9 ml-9 px-2" />
                    <span class="text-sm content-center items-center">
                    Guardar
                    </span>

                </div>
                <div class=" inline-block w-1/4     py-2   my-2 rounded">

                    <See  class="items-center  w-9 h-9 ml-9 px-2"/>

                        <span class="text-sm items-center py-2 " >
                    Asi te ven
                        </span>

                </div>
                <div class="inline-block w-1/4    py-2   my-2     rounded">

                <Return class="items-center    w-8 h-8  ml-9 px-2"/>

                    <span class="text-sm   ">
                        Volver perfil
                    </span>

                </div>

            </div>
                <!--  -->

            <div class="flex justify-between ">
                <div class="block my-5">
                    <div class="block text-xs align-middle pt-.5 mr-3">Revise nuestra politca de privacidad y </div>
                    <div class="block text-xs align-middle pt-.5 mr-11">proteccion de datos personales</div>

                </div>
                <div class="text-sm align-middle my-6">Limpiar Campos</div>
            </div>
 </div>

             <div>
              
             </div>



  </template>
