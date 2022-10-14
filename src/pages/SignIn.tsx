import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import { EnvelopeSimple, LockKey } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import axios from 'axios'

export function SignIn() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'vitor.brancaliao@indsystem.com',
      password: '12345678'
    })

    setIsSignedIn(true)
  }

  return (
    <section className="w-screen h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
        <Text size='lg' className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
      </header>
      <form onSubmit={handleSubmit} className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'>
        { isSignedIn && <Text>Login realizado!</Text> }
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input id='email' name='email' placeholder='Digite seu e-mail' type={'email'} />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input id='password' name='password' placeholder='Digite sua senha' type={'password'} />
          </TextInput.Root>
        </label>
        <Checkbox />
        <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col gap-4 items-center mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </section>
  )
}