'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ComponentType } from '@/models/common';
import { AuthPageContent } from '@/utils/staticContent';
import { Button } from '@/components/ui/button';
import './auth.css';

type AuthPageContentKeys = 'signin' | 'signup';

export default function DefaultLayout({ children }: ComponentType) {
  const router = useRouter();
  const pathName = usePathname().replace('/auth/', '');

  useEffect(() => {
    if (pathName === '/auth') router.push('/auth/signin');
  }, [pathName, router]);

  const contentKey = pathName as AuthPageContentKeys;
  const content = AuthPageContent[contentKey];

  if (!content) return null;

  return (
    <div className="auth-page min-h-screen center p-5 tablet:px-14 laptop:py-10 laptop-l:py-14 laptop-l:px-0 bg-gray-7 bg-opacity-65">
      <div className="laptop-l:w-3/5 bg-white rounded-lg">
        <div className="flex">
          {/* Banner section */}
          <div
            className="hidden laptop:block rounded-s-lg relative w-1/2 box-border bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/auth-page.png')",
            }}
          >
            <Link href="/" className="absolute top-5 left-5">
              <Image
                src="/assets/icons/fiverr-white.svg"
                alt="logo fiverr"
                width={70}
                height={40}
              />
            </Link>
          </div>

          {/* Form section */}
          <div className="relative laptop:w-1/2 px-8 py-10">
            <div className="form-auth">
              {/* Title */}
              <div className="title">
                <h2>{content.title}</h2>
                <p>{content.description}</p>
              </div>

              {/* Form */}
              <div className="main">
                {children}
              </div>
            </div>

            <Link
              href={content.switchAuth.href}
              className="absolute right-2 top-2"
            >
              <Button
                type="button"
                variant={null}
                className="px-4 py-2 hover:bg-gray-4"
              >
                {content.switchAuth.label}
              </Button>
            </Link>
            <p className="mt-5 text-xs text-gray-7">{content.footer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
