"use client";
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '../../components/ui/dialog';
import { Button, buttonVariants } from '../../components/ui/button';
import {LucideArrowDownNarrowWide, MinusCircle, ArrowRight, CloudFog } from 'lucide-react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Spinner from '@/components/Spinner';
import { redirect } from 'next/navigation';


function Page() {
  const [files, setFiles] = useState(0);

  const [files_real, setFiles_real] = useState([]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handelremove = async(item) => {
    const updatedFiles = files_real.filter(obj => obj !== item);
    await setFiles_real(updatedFiles);
    console.log(files_real)
  }

  const handelview = async(item) => {
    window.open(URL.createObjectURL(item), '_blank');
  }

  const handelsend = async() =>{
    setLoading(true)
    const data = {
        "description": description,
        "Images": files_real
    }
    const response = axios.post("URL", data)
    try{
      if(response?.data?.success === "true"){ 
        console.log(response)
      }
      else{
        console.log(data)
      }
    }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }

  const onDrop = useCallback(acceptedFiles => {
    const updatedFilesReal = [...files_real];
    acceptedFiles.forEach(element => {
      console.log(element);
      updatedFilesReal.push(element);
    });
    setFiles_real(updatedFilesReal);
  }, []);
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Update description state
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <MaxWidthWrapper className="mb-5 mt-2 sm:mt-5 flex flex-wrap flex-col items-center text-center justify-center">
        <div>
          <h1 className="mx-auto  max-w-2xl text-center sm:text-3xl text-3xl md:text-4xl lg:text-5xl">
            Allow us to create<span className="text-blue-600"> Thumbnails</span> for you
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-zinc-800 text-center sm:text-lg">
            Guaranteed 27x Support
          </p>
          
        </div>
      </MaxWidthWrapper>
      
      <div className=' mb-3 items-end justify-end text-right sm:mr-20 mr-4 flex flex-col'> 
          <p> View Our Work</p>
          <LucideArrowDownNarrowWide/></div>

      <form onSubmit={handelsend}>
      <div className="flex flex-col sm:flex-row justify-between w-90 mx-auto">
        <div className="w-full sm:w-1/2 items-center text-center justify-center mb-4 sm:mb-0">
          <div className="w-[90%] border border-blue-200 rounded-lg mx-auto mr-auto sm:min-w-[60%] shadow-lg h-full min-h-[500px] text-lg sm:text-xl resize-none">

            <Dialog>
              <DialogTrigger>
                <Button className={buttonVariants({
                  className: "mt-2"
                })}>
                  Upload similar Images<ArrowRight />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop the files here ...</p> :
                      <div style={{ margin: "auto" }} className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <CloudFog className='h-6 w-6 text-black mb-2' />
                        <p className='mb-2 text-sm text-black'>
                          <span className='font-semibold'>
                            Click to upload
                          </span>{' '}
                          or drag and drop
                        </p>
                        <p className='text-xs text-black'>
                          {files_real.length} Files have been Uploaded
                        </p>
                      </div>
                  }
                </div>
              </DialogContent>
            </Dialog>
            <div className="mt-5 block" >
              {files_real.map((item, index) => (
                <div key={index}>
                  
                  

                  <div className="w-[82%] mx-auto sm:w-[400px] relative shadow-lg rounded border bg-white overflow-hidden m-2 p-4 transition-transform duration-300 hover:scale-105">
                    <span className="absolute inset-0"></span> {/* To ensure the hover effect covers the entire box */}
                    <p className="text-left">{item?.name.substring(0,10)}...</p>
                    <div className="absolute top-1 right-1 flex space-x-2 items-center">
                    <div onClick={() => handelremove(item)}>
                      <MinusCircle className="cursor-pointer mt-3" size={20} />
                    </div>
                      <div onClick={() => handelview(item)}>
                        <ArrowRight className="cursor-pointer mt-3" size={20} /> {/* Arrow Icon */}
                      </div>
                    </div>
                  </div>



                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2  ">
          <div className="w-full rounded-lg flex flex-col mt-auto">
            <textarea 
             value={description}
             required
             placeholder='Enter Your Description'
             onChange={handleDescriptionChange}
            className=" text-sm sm:text-lg w-[90%] rounded-lg mx-auto sm:ml-10 sm:max-w-[60%] shadow-lg h-full border border-black min-h-[500px] p-5 resize-none"></textarea>
          </div>
        </div>
      </div>
        <div className='mt-10 mb-10 px-auto'>
          <Button type='submit' className='mx-auto  flex flex-col min-w-[150px] sm:min-w-[400px]'>
          {loading ? <Spinner /> : "Upload"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default Page;
