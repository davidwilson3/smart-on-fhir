Created by David Wilson

# How to run this program

1. Clone or download this repository.

2. From the command line, go the to `./client` folder and run `npm i` to install all client NPM modules

3. Next, navigate up one folder level and then to the `./server` folder. Again, run `npm i` to install all server NPM modules.

4. While in the `./server` folder, from the command line run the command `npm run dev`. This will automatically run **both** servers and get the application running.

Note: if the command to run the servers concurrently fails, they can also be run separately and the application will function as intended. The command to start the backend server from the `./server` folder is `npm run server` and the command to run the client server from the `./client` folder is `npm run start`.

# Using the program

1. The program will load a total of six patients. Three of the patients come from Cerner's sandbox (http://fhir.cerner.com/millennium/dstu2/#open-sandbox) and 3 of the patients come from the Smart Health IT sandbox (https://launch.smarthealthit.org/). My assumption with this model is that a healthcare system will have its patients ID information stored in their system and use that to query external healthcare records. Using two sources shows how different, but similar, sources and data models flow in from the server and work the same on the frontend.

2. Click any of the 6 patients on the page. This will load patient details, per the requirements for this project.

3. The patient details page will list all conditions they actively are experiencing. Please note, some patients -- mostly from Cerner -- will have duplicate condition names. I deliberately left the duplicate names because they were separate, active entries in the API. My assumption is that is not for the data portal to determine if that data is valid. Rather, it is up to the doctors and the data source.

4. The rendered table of conditions can be sorted by clicking the column headers.

5. The right column of the table with the header 'Search" will open a link in a new tab which searches PubMed for the listed condition name.

6. Click the back button in the top left to return to the home page.
