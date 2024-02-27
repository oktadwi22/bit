import ComponentTransition from '@/common/component/element/ComponentTransition'
import Image from '@/common/component/element/Image'
import React from 'react'

export default function MainImageOption2() {
  return (
    <div className='flex w-full gap-7'>
        <ComponentTransition className="w-[90px] h-[400px] rounded-full border-[1px] border-[#161616] relative overflow-hidden">
        <Image
          className="w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1592434089408-7e3745969e13?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo Image"
          width={700}
          height={700}
          priority
        />
        </ComponentTransition>
        <ComponentTransition delay={0.1} className="w-[90px] h-[300px] rounded-full border-[1px] border-[#161616] relative top-[40px] overflow-hidden">
        <Image
          className="w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1592651595884-957a8f9c1d52?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo Image"
          width={700}
          height={700}
          priority
        />
        </ComponentTransition>
        <ComponentTransition delay={0.2} className="w-[90px] h-[400px] rounded-full border-[1px] border-[#161616] relative overflow-hidden">
        <Image
          className="w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1515036551567-bf1198cccc35?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo Image"
          width={700}
          height={700}
          priority
        />

        </ComponentTransition>
        <ComponentTransition delay={0.3} className="w-[90px] h-[250px] rounded-full border-[1px] border-[#161616] relative top-[80px] overflow-hidden">
        <Image
          className="w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1592651595956-9dece157e4f0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo Image"
          width={700}
          height={700}
          priority
        />

        </ComponentTransition>
        <ComponentTransition delay={0.4} className="w-[90px] h-[400px] rounded-full border-[1px] border-[#161616] relative overflow-hidden">
        <Image
          className="w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1592651595956-9dece157e4f0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo Image"
          width={700}
          height={700}
          priority
        />

        </ComponentTransition>
    </div>
  )
}
