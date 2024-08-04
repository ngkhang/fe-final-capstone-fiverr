'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signUpApi } from '@/server/actions/auth.action';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { CalendarIcon } from '@radix-ui/react-icons';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Form Schema
const FormSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
    .max(20, {
      message: 'Password is too long. Please enter a maximum of 20 characters.',
    }),
  phone: z
    .string()
    .min(10, {
      message: 'Phone number must be at least 10 characters.',
    })
    .regex(/^\d+$/, 'Phone number is invalid')
    .max(12, {
      message: 'Please enter a maximum of 12 characters.',
    })
    .optional(),
  birthday: z.date({
    required_error: 'A date of birth is required.',
  }),
  gender: z.string(),
});

const SignUp = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      phone: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const payload = {
      ...values,
      birthday: values.birthday.toString(),
      gender: values.gender === 'male' ? true : false,
      role: '',
      skill: [],
      certification: [],
    };
    const { statusCode, message } = await signUpApi(payload);

    if (statusCode === 200) {
      console.log(message);
      // TODO: Add Toast - Auto Login
      router.push('/auth/signin');
    } else console.log(message);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form-signup">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span>Name</span>
                <span>*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span>Email</span>
                <span>*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span>Password</span>
                <span>*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date('1900-01-01')
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className="btn-submit">
          Join
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
