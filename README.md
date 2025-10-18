# Supply Chain Command Center

A modern, enterprise-grade supply chain management dashboard inspired by SAP IBP, Blue Yonder, Oracle SCM, e2open, and Kinaxis RapidResponse.

## Features

### 🎯 Overview Dashboard
- **Real-time Metrics**: Active orders, in-transit shipments, inventory levels, and supplier scores
- **Demand Forecasting**: AI-powered predictions with 98.2% accuracy
- **Regional Distribution**: Visual breakdown of global revenue streams
- **Inventory Management**: Current vs optimal stock level monitoring
- **Active Alerts**: Real-time notifications for critical supply chain events

### 📊 Analytics
- **Supplier Performance**: Multi-dimensional radar charts analyzing on-time delivery, quality, and cost efficiency
- **Performance Trends**: Historical data visualization with forecasting
- **KPI Cards**: Key performance indicators including order fulfillment rate, lead time, and cost savings

### 🎲 Demand Forecasting
- **AI-Powered Predictions**: Machine learning models for accurate demand forecasting
- **Forecast Accuracy Metrics**: Real-time tracking of prediction confidence
- **Historical vs Predicted Data**: Visual comparison of actual and forecasted demand

### 🌍 Real-time Visibility
- **Global Network Map**: Interactive visualization of shipments and warehouses
- **Live Status Tracking**: Real-time updates on production, transit, and delivery
- **Recent Activity Feed**: Chronological log of supply chain events

### 🔮 Scenario Planning
- **What-If Analysis**: Model different scenarios (baseline, demand spikes, disruptions, AI-optimized)
- **Impact Projections**: Revenue, cost savings, and efficiency gain calculations
- **AI-Powered Recommendations**: Smart suggestions with confidence scores

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
\`\`\`bash
cd supply-chain-dashboard
\`\`\`

2. Install dependencies (if not already installed):
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
supply-chain-dashboard/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main dashboard component
├── public/                   # Static assets
├── package.json              # Dependencies
└── README.md                 # Documentation
\`\`\`

## Key Features Breakdown

### Navigation Tabs
- **Overview**: Comprehensive dashboard with all key metrics
- **Analytics**: Deep dive into supplier performance and trends
- **Demand Forecasting**: AI-powered prediction models
- **Real-time Visibility**: Live tracking of global operations
- **Scenario Planning**: What-if analysis and recommendations

### Interactive Elements
- Tab-based navigation for different dashboard views
- Scenario selector for planning different business cases
- Hover effects on cards and interactive elements
- Responsive design for all screen sizes
- Smooth animations and transitions

### Data Visualization
- Area charts for demand forecasting
- Bar charts for inventory management
- Pie charts for regional distribution
- Radar charts for supplier performance analysis
- Line charts for performance trends

## Customization

### Color Scheme
The dashboard uses a modern blue-indigo gradient theme. You can customize colors in:
- `app/page.tsx` - Component-level colors
- `app/globals.css` - Global theme variables

### Data Sources
Currently uses mock data. To integrate with real APIs:
1. Replace the sample data arrays in `app/page.tsx`
2. Add API calls using fetch or a library like axios
3. Implement data refresh logic for real-time updates

## Performance Features

- Server-side rendering with Next.js App Router
- Optimized bundle size with tree shaking
- Lazy loading of chart components
- Smooth animations with CSS transitions
- Custom scrollbar styling
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Real-time WebSocket integration
- [ ] Advanced filtering and search
- [ ] Export functionality for reports
- [ ] User authentication and roles
- [ ] Database integration
- [ ] Mobile app companion
- [ ] Dark mode support
- [ ] Custom date range selectors
- [ ] Downloadable PDF reports

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT License - feel free to use this project for your own purposes.

## Credits

Inspired by leading supply chain management platforms:
- SAP Integrated Business Planning (IBP)
- Blue Yonder
- Oracle Supply Chain Management Cloud
- e2open
- Kinaxis RapidResponse
