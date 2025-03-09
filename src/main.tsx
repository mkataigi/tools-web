import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const htmlBase = document.getElementById('app');
if (!htmlBase) {
  throw new Error('app要素が見つかりません');
}
const root = createRoot(htmlBase);
root.render(<App />);