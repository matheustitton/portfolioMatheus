// {/* <Carousel>
//                         <CarouselContent>
//                             <CarouselItem>{/* Thumbnail simulada */}
//                                 <div className="bg-zinc-800 w-60 h-40 rounded-lg flex items-center justify-center mr-6">
//                                     <span className="text-gray-500">📷</span>
//                                 </div>

//                                 {/* Conteúdo */}
//                                 <div className="flex flex-col justify-between">
//                                     <div>
//                                         <h2 className="text-xl font-semibold mb-2">{repos[index].name}</h2>
//                                         <p className="text-gray-400 text-sm mb-4">
//                                             {repos[index].description || "Sem descrição"}
//                                         </p>

//                                         <div className="space-y-2 text-sm text-gray-400">
//                                             <p>
//                                                 <span className="font-semibold">Ano:</span>{" "}
//                                                 {new Date(repos[index].created_at).getFullYear()}
//                                             </p>
//                                             <p>
//                                                 <span className="font-semibold">Tecnologia:</span>{" "}
//                                                 {repos[index].language || "Não especificada"}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Botão GitHub */}
//                                     <a
//                                         href={repos[index].html_url}
//                                         target="_blank"
//                                         className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
//                                     >
//                                         Repositório <Github size={18} />
//                                     </a>
//                                 </div>
//                             </CarouselItem>
//                             {/* <CarouselItem>...</CarouselItem>
//                             <CarouselItem>...</CarouselItem> */}
//                         </CarouselContent>
//                         <CarouselPrevious onClick={prev} />
//                         <CarouselNext onClick={next}/>
//                     </Carousel> */}