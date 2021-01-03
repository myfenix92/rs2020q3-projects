Hi. My name's Yana. Today I will talk about Cross-Site Scripting.

Cross-site Scripting is a client-side code injection attack. The attacker aims to execute malicious scripts in a web browser of the victim by including malicious code in a legitimate web page or web application. The actual attack occurs when the victim visits the web page or web application that executes the malicious code. The web page or web application becomes a vehicle to deliver the malicious script to the user’s browser. Vulnerable vehicles that are commonly used for Cross-site Scripting attacks are forums, message boards, and web pages that allow comments.

Main types XSS:
Reflected
Stored
DOM-based

The Reflected XSS also termed as “Non-Persistence XSS” or “Type II”, occurs when the web application responds immediately on user’s input without validating what the user entered, this can lead an attacker to inject browser executable code inside the single HTML response. It is termed “non-persistent” as the malicious script does not get stored inside the web-server’s database, thus the attacker needs to send the malicious link through phishing in order to trap the user. Reflected XSS is the most common and thus can be easily found over at the “website’s search fields” where the attacker includes some arbitrary Javascript codes in the search textbox and, if the website is vulnerable, the web-page return up the event as was described into the script.

“Stored XSS” often termed as “Persistent XSS” or “Type I”,  as over through this vulnerability the injected malicious script gets permanently stored inside the web application’s database server and the server further drops it out back, when the user visits the respective website. The most common example of Stored XSS is the “comment option” in the blogs, which allow any user to enter his feedback as in the form of comments for the administrator or other users.

The DOM–Based Cross–Site Scripting is the vulnerability which appears up in a Document Object Model rather than in the HTML pages. DOM-based XSS vulnerabilities usually arise when JavaScript takes data from an attacker-controllable source, such as the URL, and passes it to a sink (a dangerous JavaScript function or DOM object as eval()) that supports dynamic code execution.
This is quite different from reflected and stored XSS because over in this attack, the developer cannot find the malicious script in HTML source code as well as in HTML response, it can be observed at execution time.

Imagine a person sitting at a computer. The screen shows a file manager, text editor, spreadsheet, and music player icon in the lower-right corner. All is ordinary and familiar so far. But something is missing from this picture—an Internet browser with dozens of tabs open simultaneously. These tabs are filled with interesting headlines, funny videos, ads for sporting goods, online stores, and a payment site with a just-paid receipt for a speeding ticket. All of these sites have one thing in common: they would hardly be possible without JavaScript. Then a simple click on an advertising banner triggers another page. The page contains a script that connects to an online banking site and quietly transfers money from the user's account to the attacker's card. Rather unpleasant, to put it mildly. Fortunately, browsers eliminate this possibility thanks to the same-origin policy. This policy ensures that the scripts executed on a web page don't have access to the wrong data. If scripts have been loaded from a different domain, the browser won't be able to run them.

The same-origin policy is supposed to allow scripts only when a script is loaded from the same domain as the page that the user is currently viewing. And in reality, attackers don't have direct access to the server responsible for the page displayed by the browser. So how do attackers do it? For example, a typical search engine echoes the user's query when displaying search results. What if the user tries to find the string "<script> alert (1) </script>"? Will the contents of the search results page lead to this script being executed, and will a dialog box with the message "1" appear? This depends on how well the web application developers verify user input and transform it into a safe format.

The second step is for the attacker to convince the user to visit a specific page. The attacker also needs to pass the attack vector to the page. Once again, there is nothing here that poses a serious obstacle. Websites often accept data as part of a URL. To implement the attack vector, attackers can use various social engineering or phishing methods.

According to Positive Technologies analytics, XSS is among the three most common web application attacks. The relative percentage of XSS compared to other attack types has dipped in previous years. Still, there is no sign of XSS losing popularity.

Cross-site scripting attacks can also be leveraged for financial benefit in more indirect ways. For example, severe XSS attacks can be used to embed advertising information or manipulate Internet ratings through DOM modification.

The Positive Technologies Security Threatscape divides XSS into three categories:
Low
Medium
High
A website might have stored XSS, resulting in High impact.
It's also important to mention that in any case, impact depends on the author's assessment of criticality—researchers have their own viewpoints. XSS vulnerabilities can be of high severity, but typically they receive scores below those given to other types of attacks.

The best way to test your own application, or one for which you have source code, is by combining manual and automated techniques. Static code analysis should be able to detect a number of XSS vulnerabilities.
How well detection works depends heavily on the scanner. Different scanners vary in vectors and techniques, so some will be more reliable than others, and none of them will be perfect.

13 slide
You can cover many potential attack vectors by following a similar pattern:
1. Start by looking for places with no special character filtering (> <"').
2. The next step is analyzing the JavaScript code of the project.
3. Then consider not only the JavaScript code, but all parts of the system as a whole.

Pay special attention to the following elements:
Markdown editors that allow users to add custom HTML markup to forum posts
Text-to-emoji converters that can be tricked into producing an infected element
URL and email converters that turn text into a link
Text-to-picture converters and the ability to set profile pictures hosted on third-party resources

SCRIPT TAG
This one is a relatively simple XSS script. It can be placed as an external script reference or embedded within the script tag itself.

JAVASCRIPT EVENTS
Another commonly used vector is onload/onerror events. These are embedded in many different tags.

BODY TAG
An attack can be delivered within the body tag either through JavaScript events, as described earlier, or tag attributes that can be similarly exploited.

IMG TAG
Browsers can also run JavaScript code associated with the img tag.

INPUT TAG
The input tag can be manipulated if it has "image" in its type attribute.

DIV TAG
The div tag supports embedded scripts, which can be exploited by attackers.

IFRAME TAG
The iframe tag lets you embed another HTML page in the current page. An IFrame may contain JavaScript but JavaScript in the IFrame does not have access to the DOM of the parent page due to the Content Security Policy (CSP) of the browser. However, IFrames are still very effective for pulling off phishing attacks.

LINK TAG
The link tag, which is often used to link to external style sheets, may contain a script.

TABLE TAG
The background attribute of the table and td tags can be exploited to refer to a script instead of an image.

OBJECT TAG
The object tag can be used to include a script from an external site.

Even just basic rules will be enough to stop the majority of attacks. Here are the most important ones.