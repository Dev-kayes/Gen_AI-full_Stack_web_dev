to use scss first we need to import style.scss in the main file instead of index.css file that is provided by react vite. to use scss we need to do npm i sass . that allows the browser to use scss style on the web page.<br>
in out front end the folder structure we are following will be called feature based folder structure.<br>
in frontEnd we have 4 Layers of architecture:
<br>
UI<br>
=>components<br>
=>pages<br>
<br>
HOOK(for managing state and Api layers)<br>
=>hooks<br>
<br>
STATE(data store layer)<br>
=>auth.context.js<br>
=>ai.context.js<br>
<br>
API(for communication with BackEnd)<br>
=>services<br>
=>auth.api.js<br>
binding with useState is called two way binding.<br>
