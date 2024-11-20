# TFW

## Description
TFW is a React-based application built with Vite, offering a dynamic and interactive user interface. The app features modular components, clean CSS styling, and various sections such as a top bar, page slider, auction listings, and details pages. It's designed for a smooth and engaging user experience.

## 🗂️ Project Structure

### **`src/`**
The `src` folder contains the core of the application, organized as follows:

- **`components/`**: All React components, each with its functionality and styling.
- **`assets/`**: Includes folders for icons, images, logos, and slides.

---

## 🧩 Components

Each component resides in its own folder within the `components` directory. Below is an overview:

### **1. Topbar**
- Navigation links to different sections of the app:
  - Auctions
  - Roadmap
  - Discover
  - Community

### **2. MainSection**
- Displays sections like **"NON FUNGIBLE TOKENS"**.
- Showcases NFT content and experiences with accompanying images.

### **3. LatestAuctions**
- Features auction items with details such as:
  - Time remaining
  - Number of bids
  - Likes
- Includes an **AuctionCard** component that displays information about individual cards and auctions.

### **4. DetailsSection**
- Displays detailed content including:
  - Headers
  - Images
  - Interactive buttons

### **5. PageWithSlider**
- A horizontally scrolling section showcasing featured content through images.

### **6. PopularAuctions**
- Highlights the most popular live auctions on the platform.

### **7. Footer**
- Includes:
  - Navigation links
  - Social media icons
  - Newsletter sign-up form

---

## 🎨 CSS and Data Files

- Each component has its own **CSS file** for styling.
- Some components include additional **JavaScript files** for data handling:
  - **Auction Cards**: Holds data for the `LatestAuctions` component.
  - **DetailsSection**: Contains data for detailed content displayed in the `DetailsSection`.

---

## 📁 Assets

The `assets` folder contains:
- **`icons/`**: Various icons used across the app.
- **`images/`**: High-quality images for different sections.
- **`logos/`**: Branding assets like logos.
- **`slides/`**: Images for the horizontal slider in the `PageWithSlider` component.

---

## 🌟 Features

- **Responsive Design**: Optimized for all screen sizes.
- **Reusable Components**: Modular architecture for easy reuse and updates.
- **Dynamic Content**: Interactive elements like auction cards and sliders.
- **Rich Media**: Includes visually appealing images, icons, and animations.

---

## Prerequisites
To run this project, you need the following software installed:
- **Node.js**: Version 14.x or above
- **npm**: Node package manager (usually installed with Node.js)

## Getting Started

### 1. Clone the repository
To clone the repository, run the following command in your terminal:

```bash
https://github.com/halimaarh/TobamsGroup.git

### 2.Navigate to the project directory:
cd TobamsGroup
npm install

### 2.Run the application
npm run dev
The application will be available at http://localhost:5173

### How to use the README:
- **Description**: A general overview of the project.
- **Features**: Highlight the main features available in the project.
- **Prerequisites**: Necessary software to run the project.
- **Getting Started**: Step-by-step guide on how to clone, install, and run the project.

Contact
If you have any questions, suggestions, or contributions, feel free to open an issue or submit a pull request on the GitHub repository.



