"use client"
import { DollarSign, Users, CreditCard, Activity, ArrowRight, CloudFog } from "lucide-react";
import Card, {CardProps } from "@/components/Card-1";
import { SalesProps } from "@/components/SalesCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00"
  }
];

export default function Home() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ });

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="max-w-3xl m-5 sm:text-4xl text-3xl md:text-5xl lg:text-6xl">
        Dashboard
      </h1> 
      <section className="grid max-w-[95%] mx-10 grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
      <div className="w-[90%] border border-blue-500 rounded-lg mx-auto mr-auto sm:min-w-[60%] shadow-lg h-full min-h-[500px] text-lg sm:text-xl resize-none">

      <Dialog>
              <DialogTrigger>
                <Button className={buttonVariants({
                  className: "mt-5 mx-5"
                })}>
                  Upload Video<ArrowRight />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div>
                      <p>Drop the files here ...</p> 
                      <div style={{ margin: "auto" }} className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <CloudFog className='h-6 w-6 text-black mb-2' />
                        <p className='mb-2 text-sm text-black'>
                          <span className='font-semibold'>
                            Click to upload
                          </span>{' '}
                          or drag and drop
                        </p>
                        <p className='text-xs text-black'>
                          Uploaded
                        </p>
                      </div>
                </div>
              </DialogContent>
            </Dialog>
            </div>
      </section>
    </div>
  );
}
