React Starter Kit v0.0.1
This is a high-performance React starter kit built with Vite and SWC for near-instant development speeds. It is designed as a "one-click" foundation for production-ready dashboards and SaaS applications.

🚀 Key Features
SWC Integration: Uses @vitejs/plugin-react-swc for Rust-powered Fast Refresh (up to 20x faster than Babel).

Path Aliasing: Preconfigured @/ alias for clean imports (e.g., import { Button } from '@/components').

Theme Support: Prebuilt dashboard layout with native Dark/Light mode toggling.

Auth Ready: Ready-to-use templates for Login, Register, and OTP verification.

Optimized Routing: Automatic code splitting and lazy loading via React Router.

🛠️ Performance Architecture
We chose SWC (Speedy Web Compiler) over Babel to prioritize developer velocity.

Note on React Compiler: The experimental React Compiler currently requires Babel. This kit stays with SWC for maximum HMR speed and will transition to the Rust-based compiler once it reaches stable SWC compatibility.
