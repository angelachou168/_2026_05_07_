/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Timer } from './components/Timer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-light tracking-widest text-[#d97373] font-bold uppercase">
            安琪拉 AI 小學
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Timer label="6年1班" themeColor="cyan" />
          <Timer label="6年6班" themeColor="rose" />
        </div>
      </div>
    </div>
  );
}
