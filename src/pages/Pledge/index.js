import React from 'react'
import InnerHTML from 'dangerously-set-html-content'


const Pledge = () => {
  document.title = "Pledge | Call for Civility"

  const JotForm = `

 
  <iframe
  id="JotFormIFrame-213167811339052"
  title="Sign the Call For Civility Pledge now:"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allowfullscreen="true"
  allow="geolocation; microphone; camera"
  src="https://form.jotform.com/213167811339052"
  frameborder="0"
  style="min-width:100%;max-width:100%;height:539px;border:none;"
  scrolling="no"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-213167811339052");
if (ifr) {
  var src = ifr.src;
  var iframeParams = [];
  if (window.location.href && window.location.href.indexOf("?") > -1) {
    iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
  }
  if (src && src.indexOf("?") > -1) {
    iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
    src = src.substr(0, src.indexOf("?"))
  }
  iframeParams.push("isIframeEmbed=1");
  ifr.src = src + "?" + iframeParams.join('&');
}
window.handleIFrameMessage = function(e) {
  if (typeof e.data === 'object') { return; }
  var args = e.data.split(":");
  if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
  if (!iframe) { return; }
  switch (args[0]) {
    case "scrollIntoView":
      iframe.scrollIntoView();
      break;
    case "setHeight":
      iframe.style.height = args[1] + "px";
      if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
        iframe.style.minHeight = args[1] + "px";
      }
      break;
    case "collapseErrorPage":
      if (iframe.clientHeight > window.innerHeight) {
        iframe.style.height = window.innerHeight + "px";
      }
      break;
    case "reloadPage":
      window.location.reload();
      break;
    case "loadScript":
      if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
      var src = args[1];
      if (args.length > 3) {
          src = args[1] + ':' + args[2];
      }
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      break;
    case "exitFullscreen":
      if      (window.document.exitFullscreen)        window.document.exitFullscreen();
      else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
      else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
      else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
      else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
      break;
  }
  var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
  if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
    var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
    iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
  }
};
window.isPermitted = function(originUrl, whitelisted_domains) {
  var url = document.createElement('a');
  url.href = originUrl;
  var hostname = url.hostname;
  var result = false;
  if( typeof hostname !== 'undefined' ) {
    whitelisted_domains.forEach(function(element) {
        if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
            result = true;
        }
    });
    return result;
  }
};
if (window.addEventListener) {
  window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
  window.attachEvent("onmessage", handleIFrameMessage);
}
</script>
  
  `

  return (
    <div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Civility Pledge
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                On my Honor: I _________________, pledge to stand for that which is right. I desire to talk and work with others in an effort to show kindness and respect to all I come in contact with. I Seek First to Understand, Then to Be Understood® - Habit 5, FranklinCovey.com. I can try harder, will accept constructive criticism from others, and commit to do better. I must do my best to remain civil and encourage others to do the same. I will use my sphere of influence to de-escalate from contentious situations, and will do all I can to encourage civility in all my interactions both in public and in private. I realize that I can remain  true to myself and still show kindness to others. I understand that my respect for others does not in any way mean I agree with all they say or do, but rather that I simply give respect to get respect. I can agree to disagree while being agreeable.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white justify-center flex">
        <InnerHTML html={JotForm} className="w-1/2" />
      </div>
    </div>
  )
}

export default Pledge