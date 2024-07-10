# Alberto Watch Company Website

## Problem Definition

### Overview
Alberto Watch Company is a renowned luxury watch retailer specializing in high-end timepieces from prestigious brands such as Michael Kors, Rolex, Citizen Eco-Drive, Bulova, and more. The company offers a full-service approach, appraisal, and retail services. However, Alberto Watch Company faces several challenges and opportunities that need to be addressed through the development of a new website.

## The project involves creating a single-page website for Alberto Watch Company using Tailwind CSS. The website have the following features:

- A welcoming landing page with a curved font header.
- A loading spinner that appears while the page is loading.
- A continuous scrolling ticker at the bottom of the page displaying the current date, time, and location using HTML5's geolocation features.
- A visitor count that updates each time a new user visits the website, without counting the same user multiple times.
- A button that appears when the user scrolls down halfway through the page. This button should be fixed on the right-hand side and take the user back to the top of the page when clicked.


### Challenges
1. **Limited Online Presence**: Alberto Watch Company's current online presence is limited, hindering its ability to reach a wider audience of potential customers and showcase its extensive collection of luxury watches effectively.

2. **Lack of Information Accessibility**: Existing and potential customers often struggle to access detailed information about Alberto's services, including watch repair, appraisal processes, retail options, and contact details.

3. **Poor User Experience**: The current website's user experience is subpar, with navigation issues, outdated design elements, and limited interactivity, leading to a less engaging and intuitive browsing experience for visitors.

4. **Competitive Market Landscape**: Alberto Watch Company operates in a highly competitive market with numerous luxury watch retailers vying for customer attention and market share, requiring a standout online presence and customer engagement strategies.

### Opportunities
1. **Global Reach**: A well-designed and functional website can help Alberto Watch Company expand its reach beyond local markets and tap into a global audience of luxury watch enthusiasts, collectors, and potential buyers.

2. **Enhanced Customer Experience**: By providing comprehensive information, interactive features, and easy access to services, Alberto can significantly enhance the overall customer experience and satisfaction levels.

3. **Brand Promotion and Differentiation**: A professionally designed website can serve as a powerful tool for promoting Alberto's brand image, values, and unique selling propositions, helping the company stand out in the competitive luxury watch market.

4. **Streamlined Services**: An integrated online platform can streamline Alberto's service offerings, making it easier for customers to explore products, request repairs or appraisals, and engage with the company for inquiries or support.

## Project Objective
The objective of developing a new website for Alberto Watch Company is to address the aforementioned challenges and leverage the opportunities to:
- Establish a strong and captivating online presence.
- Provide comprehensive information about products and services.
- Enhance user experience and engagement.
- Promote Alberto's brand image and values.
- Improve accessibility and reach for a global audience.






## Design Specifications

### User Interface (UI)
1. **Visual Style**: The website will have a sleek and modern design, reflecting the luxury and sophistication of Alberto's timepieces. Use a color palette of deep blue and gold for a luxurious feel.
2. **Layout**: The layout will be clean and organized, with easy navigation menus, clear sections for products, services, and company information.
3. **Typography**: Use a professional and elegant font style such as Playfair Display for headings and Montserrat for body text to ensure readability and aesthetics.
4. **Images and Graphics**: High-quality images of watches and brand logos will be used throughout the website to showcase products and enhance visual appeal.

### Functionality
1. **Responsive Design**: The website will be fully responsive, adapting seamlessly to different screen sizes and devices for a consistent user experience.
2. **Interactive Elements**: Implement interactive features such as hover effects on menu options, image galleries for products, and forms for contact and inquiries.
3. **Loading Speed**: Optimize loading times to ensure fast and efficient performance, enhancing user engagement and satisfaction.
4. **Accessibility**: Follow accessibility standards to ensure the website is accessible to all users, including those with disabilities, through keyboard navigation, alt text for images, and color contrast.

### Content
1. **Product Information**: Provide detailed information about each product using a popup modal, including specifications, pricing, availability, and purchasing options like adding to cart.
2. **About Us**:Display email, address, phone number, include a compelling story about Alberto Watch Company.
3. **Contact Information**: Display email, address, phone number, and a contact form for easy communication with customers which when sent will be receive in my gmail.



### Technologies Used

- **HTML5**: Structure the web page.
- **Tailwind CSS**: Style the web page and do the responsiveness.
- **JavaScript**: Implement dynamic features like the loading spinner, scrolling ticker, and visitor count.

### Loading Spinner

- A spinner that covers the entire screen while the content is loading.
- The spinner disappears once the page has fully loaded.






# Flowchart mermaid code
# Alberto Watch Company Website

## Flowchart Diagram

**```mermaid**
graph TD;
    A[Start Website Creation] -->|1. Set Up Project Structure| B[Configure Tailwind CSS]
    A -->|2. Create HTML Structure| C[Build Each Section]
    B --> D[Add Interactive Features]
    C --> D
    D --> E[Test and Deploy]
    E --> F[Documentation]
    F --> G[Website Completed]


**When you push this README.md file to GitHub, the Mermaid code will be rendered as a visual flowchart diagram in the README file. The resulting flowchart will show each step in the website creation process with arrows indicating the flow of tasks. This can help viewers understand the sequential order of tasks involved in creating the Alberto Watch Company website.**

**After pushing the README.md file to GitHub, you can view the rendered flowchart diagram directly in the repository's README file on the GitHub website. The flowchart will be displayed as a graphical representation of the steps outlined in your Mermaid code.**




## Project Installation Instructions

### Setting up Tailwind CSS

**you can go to tailwind.css and navigate to the installation side you will see the steps by steps process of how to install or set up your tailwind environment or you can follow my steps by steps process below**

1. **Install Node.js/npm**:
   - Download and install Node.js from https://nodejs.org/
   - Open your terminal/command prompt and run `npm -v` to verify npm installation.

   2. **Create a new project**:
   - Create a new folder for your project.
   - Ope the folder with your editor e.g Visual studio code and navigate to your terminal either command prompt or powershell.

   3. **Initialize npm**:
   - Run `npm init -y` to initialize npm with default settings and it will generate a package.json fie for you which contain your project name version and all.

   4. **install tailwind**
   - Run `npm install -D tailwindcss` When you run npm install -D tailwindcss in your terminal, it will install Tailwind CSS as a development dependency in your project
   - Run `npx tailwindcss init` When you run npx tailwindcss init in your terminal, it will initialize Tailwind CSS and generate a default tailwind.config.js file in your project directory. This configuration file is where you can customize Tailwind CSS settings according to your project's needs.

   5. **inside your tailwind.config.js file**
   - Replace `
   /** @type {import('tailwindcss').Config} */
    module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
    }`  copy this and replace it with what you see there inside there you can cofigure your primary and secondary color your fonts name and all there

    6. **Create an src folder**
    - Inside the src folder you create a input.css file 
    - After creating it you paste this there ` @tailwind base;
    @tailwind components;
    @tailwind utilities; ` you can add your styling there

    - Still inside the src folder create all your html file inside, your javascript file,the image folder and all inside the src folder

    7. **Inside the package.json file**
    - Paste this `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch` inside the single quote and replace test with "watch" inside a quote
    - inside all your html files there must be this ` <link href="./output.css" rel="stylesheet">` there for your output.css

    8. **Inside your terminal**
    - Run `npm run watch` this is what you will be using to run or compile all your file
    - After running that an output.css file will be automatically generated
    - So anytime your terminal stop running just type `npm run watch` and it will start compiling
    - thats all.
    
