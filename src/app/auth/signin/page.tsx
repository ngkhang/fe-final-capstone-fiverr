'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signInApi } from '@/server/actions/auth.action';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Form Schema
const FormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
    .max(20, {
      message: 'Password is too long. Please enter a maximum of 20 characters.',
    }),
});

interface Field {
  key: number;
  name: 'email' | 'password';
  label: string;
  placeholder: string;
}

const fields: Field[] = [
  { key: 1, name: 'email', label: 'Email', placeholder: 'abc@gmail.com' },
  { key: 2, name: 'password', label: 'Password', placeholder: '********' }
];

const SignIn = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const { statusCode, message } = await signInApi(values);

    // TODO: Add Toast
    if (statusCode === 200) {
      console.log(message);
      router.push('/');
    }
    else {
      console.log(message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map(({ key, name, label, placeholder }) => (
          <FormField
            key={key}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>{label}</span>
                  <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" variant="outline" className="btn-submit">
              Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignIn;
