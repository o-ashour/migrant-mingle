'use client'

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getFirestoreInstance } from "@/firebase/clientApp";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { getAuthInstance } from "@/firebase/clientApp";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [userInput, setUserInput] = useState({email: '', password: '', username: ''});
  const router = useRouter();
  
  const handleEmailChange = (e) => {
    setUserInput(prevVal => {return {...prevVal, email: e.target.value}})
  }

  const handlePasswordChange = (e) => {
    setUserInput(prevVal => { return { ...prevVal, password: e.target.value } })
  }

  const handleUsernameChange = (e) => {
    setUserInput(prevVal => { return { ...prevVal, username: e.target.value } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuthInstance();
    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Status: ${errorCode}, Error: ${errorMessage}`)
      });
  }

  return (
    <main>
      <div className="max-h-screen p-6 flex items-center justify-center mt-10">
        <div className="container max-w-screen-lg mx-auto">
          <div style={{ marginTop: "50px" , textAlign:"center"}}>
            <h2 className="font-semibold text-xl text-gray-600">
              Registration Form
            </h2>
            <p className="text-gray-500 mb-6 font-medium">
              Your Experience Matters: Join the Conversation and Share Your
              Journey!
            </p>
            <div className="bg-[#D2C6F7] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form onSubmit={handleSubmit} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="mb-5">
                  <div className="md:col-span-2 mb-6">
                    <label htmlFor="username">User Name</label>
                    <input
                      onChange={handleUsernameChange}
                      type="text"
                      name="username"
                      id="username"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="Janesmith"
                      autoComplete="username"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 mb-6">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={handlePasswordChange}
                      type="password"
                      name="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-3 mb-4">
                      <label htmlFor="first-name">First Name</label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="md:col-span-2 mb-4">
                      <label htmlFor="last-name">Last Name</label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className="md:col-span-5 mb-4" >
                      <label htmlFor="email">Email Address</label>
                      <input
                        onChange={handleEmailChange}
                        type="email"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div className="md:col-span-5 mb-4">
                      <label htmlFor="about">About You</label>
                      <textarea
                        id="about"
                        name="about"
                        rows="6"
                        className="border mt-1 rounded px-4 w-full bg-gray-50"
                      ></textarea>
                    </div>
                    <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="bg-primary text-white font-bold py-2 px-4 rounded"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}

      <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav
            class="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl px-4 py-7 sm:px-6"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Migrant. Mingle</span>
                {/* <img class="h-8 w-auto" src="assets/LogoDesign1/coconotLightWhiteBgd.jpg" width="200" alt="Migrant.Mingle" /> */}
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  migrant.
                </h1>
                <p
                  className="tracking-tight text-gray-400"
                  style={{ marginLeft: "65px", marginTop: "-11px" }}
                >
                  MINGLE
                </p>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/" class="text-l font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          {/* ==== RESPONSIVE DESIGN ===== */}
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          {/* <div class="lg:hidden" role="dialog" aria-modal="true"> */}
          {/* <!-- Background backdrop, show/hide based on slide-over state. -->
             <div class="fixed inset-0 z-50"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                  </div>
                  <div class="py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </header>
      </div>
    </main>
  );
}
