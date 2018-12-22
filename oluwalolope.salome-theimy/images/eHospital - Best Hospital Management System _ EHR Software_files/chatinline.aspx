

   	// livechat by www.mylivechat.com/

   	
	   // first loading
	   if (typeof (MyLiveChat) == "undefined") {
		   MyLiveChat = {};
		   MyLiveChat.RawConfig ={UIPopupMode:"Modern",SmartRejectTooltip:"Close",SmartTemplate:"2",SmartHeadline:"Chat Invitation",SmartHideTimeout:"10",WaitingFieldQuestion:"1",SmartMaxReject:"2",SmartEntryUrlFilter:"",WebConsoleRedirectTime:"635992310440053130",InPageHeadBgColor:"#1d357d",InlineChatOfflineLogo:"a5",InlineChatBubbleUIMode:"1",InPageUseBubbleTopOnlineOnly:"0",InviteHeadline:"Chat Invitation",SmartUseVisitUrlFilter:"1",SmartUseReferUrlFilter:"1",InlineChatSurveyVisible:"1",SmartMaxIgnore:"2",WaitingShowForClick:"1",WaitingShowForInvite:"0",InviteAcceptTooltip:"Chat Invitation",InlineChatSurveyUseComment:"1",InviteSoundFile:"1",InlineChatSurveyUseRating:"1",SmartVisitUrlFilter:"",SmartLocationFilter:"",InPageHeadBorderColor:"#1d357d",InviteShowTimeout:"30",ButtonOpenNewWindow:"True",InlineChatEnableOAuth:"0",UIMobileMode:"Dialog",InPageBubbleTop:"3",InviteRejectTooltip:"Close",InPageHeadSize:"18px",InviteHideTimeout:"1800",InPageUseBubbleTop:"1",SmartPlaySound:"1",InlineChatSurveyUseEmail:"1",SmartMessage:"May I help you?",SmartStayTime:"5",InlineChatOnlineLogo:"upload",WaitingShowForSmart:"1",SmartReferUrlFilter:"",InPageTemplate:"1",SmartUseShowTimeout:"1",WidgetOpenNewWindow:"True",InlineChatEnableDrag:"0",SmartShowTimeout:"60",SmartUsePageTime:"1",InPageTemplateMobile:"1",InvitePhoto:"upload",SmartKeywordsFilter:"",maxWaitTime:"300",SmartUseStayTime:"1",WaitingFieldEmail:"1",SmartUseLocationFilter:"1",SmartHideIfChatting:"1",SmartAcceptTooltip:"Chat Invitation",UIDialogMode:"Classic",WaitingLogo:"13",SmartUsePageCount:"1",InlineChatTimestampVisible:"1",SmartUseMaxReject:"1",OnholdWaitTime:"120",BrandLogo:"http://www.adroitinfosystems.com/images/siteimages/logo.jpg",SmartUseKeywordsFilter:"1",InvitePlaySound:"1",SmartUseEntryUrlFilter:"1",WaitingFieldDepartment:"1",InPageImageOffline:"1",SmartUseHideTimeout:"1",InviteTemplate:"1",SmartPageCount:"1",SmartSoundFile:"1",SmartUseMaxIgnore:"1",InPageImageOnline:"1",InviteMessage:"Hello, My Name is (AGENT). How can I help you ?",InPageHeadFont:"Georgia",SmartPageTime:"5"};
				MyLiveChat.RawQuery ={hccid:"51742554",apimode:"chatinline"};
				for (var mlcp in MyLiveChat.RawConfig) {
					MyLiveChat[mlcp] = MyLiveChat.RawConfig[mlcp];
				}
				for (var mlcp in MyLiveChat.RawQuery) {
					MyLiveChat[mlcp] = MyLiveChat.RawQuery[mlcp];
				}

				MyLiveChat.HCCID ='51742554';
				MyLiveChat.PageBeginTime = new Date().getTime();
				MyLiveChat.LoadingHandlers = [];
				//	,"Departments"
				MyLiveChat.CPRFIELDS = ["SyncType", "SyncStatus", "SyncResult", "HasReadyAgents", "VisitorUrls", "VisitorStatus", "VisitorDuration", "VisitorEntryUrl", "VisitorReferUrl"];
	   }
	   else {
		   MyLiveChat.MultiLinked = true;
	   }
	


	   MyLiveChat.Version =3006;
	   MyLiveChat.FirstRequestTimeout =10800;
		  MyLiveChat.NextRequestTimeout =21600;
		  MyLiveChat.SyncType =null;
		  MyLiveChat.SyncStatus ="LOADING";
		  MyLiveChat.SyncUserName =null;
		  MyLiveChat.SyncResult ="LOADING";
		  MyLiveChat.HasReadyAgents =false;
		  MyLiveChat.SourceUrl ="https://www.adroitinfosystems.com/products/ehospital-systems";
		  MyLiveChat.AgentTimeZone = parseInt("6" || "-5");
		  MyLiveChat.VisitorStatus ="";
		  MyLiveChat.UrlBase ="https://s9.mylivechat.com/livechat2/";
		  MyLiveChat.SiteUrl ="https://s9.mylivechat.com/";

   	

		  if (!MyLiveChat.AgentId) MyLiveChat.AgentId = MyLiveChat.RawAgentId;

		  MyLiveChat.Departments = [];

		  MyLiveChat.Departments.push({
			  Name:"Sales",
			  Agents: [{
					Id:'User:1',
					Name:"Sanjay",
					Online:false
   			},{
					Id:'User:11',
					Name:"Alex",
					Online:false
   			}],
				Online:false
   		});

		  MyLiveChat.Departments.push({
			  Name:"Support",
			  Agents: [{
					Id:'User:1',
					Name:"Sanjay",
					Online:false
   			},{
					Id:'User:11',
					Name:"Alex",
					Online:false
   			}],
				Online:false
   		});



		  MyLiveChat.VisitorUrls = [];



   	

		  function MyLiveChat_AddScript(tag) {
			  var func = MyLiveChat_AddScript;
			  var arr = func._list;
			  if (!arr) func._list = arr = [];
			  if (func._loading) {
				  arr.push(tag);
				  return;
			  }
			  function ontagload() {
				  func._loading = false;
				  if (!arr.length) return;
				  tag = arr.shift();
				  LoadTag();
			  }
			  function LoadTag() {
				  func._loading = true;
				  if ('onload' in tag) {
					  tag.onload = ontagload;
				  }
				  else {
					  var iid = setInterval(function () {
						  if (tag.readyState != 'complete' && tag.readyState != 'loaded')
							  return;
						  clearInterval(iid);
						  ontagload();
					  }, 10);
				  }
				  var p = document.getElementsByTagName("head")[0] || document.body;
				  p.insertBefore(tag, p.firstChild);
			  }
			  LoadTag();
		  }

		  function MyLiveChat_GetLastScriptTag() {
			  var coll = document.getElementsByTagName("script");
			  return coll[coll.length - 1];
		  }
		  function MyLiveChat_ImportCss(url) {
			  var p = document.head || document.getElementsByTagName("head")[0] || document.body;
			  var tag = document.createElement("link");
			  tag.setAttribute("rel", "stylesheet");
			  tag.setAttribute("href", url);
			  p.insertBefore(tag, p.firstChild);
		  }
		  function MyLiveChat_DocWrite(html, relativetag) {
			  if (html.substr(0, 7) == "<script")	//Low IE interactive or defer
			  {
				  var src = html.match(/src=["']?([^"'>]*)["']/)[1];
				  if (!MyLiveChat.LoadedScripts) MyLiveChat.LoadedScripts = {};
				  if (MyLiveChat.LoadedScripts[src]) return;
				  MyLiveChat.LoadedScripts[src] = true;

				  var tag = document.createElement("script");
				  tag.setAttribute("src", src);
				  MyLiveChat_AddScript(tag);
			  }
			  else {
				  if (!document.body || document.readyState == "loading") {
					  document.write(html);
					  return;
				  }

				  if (!relativetag) relativetag = MyLiveChat_GetLastScriptTag();
				  var div = document.createElement("DIV");
				  div.innerHTML = html;
				  while (true) {
					  var c = div.firstChild;
					  if (!c) break;
					  div.removeChild(c);
					  relativetag.parentNode.insertBefore(c, relativetag);
				  }
			  }
		  }

		  MyLiveChat.NewGuid = function () {
			  var guid = "";
			  for (var i = 1; i <= 32; i++) {
				  guid += Math.floor(Math.random() * 16.0).toString(16);
				  if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
			  }
			  return guid;
		  }

		  MyLiveChat.RandomID = MyLiveChat.NewGuid();

   	

		  MyLiveChat.VisitorDuration = 0;
		  MyLiveChat.VisitorEntryUrl = "";
		  MyLiveChat.VisitorReferUrl = "";

		  MyLiveChat.ShowButton =true;
		  MyLiveChat.ShowLink =true;
		  MyLiveChat.ShowBox =true;
		  MyLiveChat.ShowSmart =false;


		  MyLiveChat.NoPrivateLabel =true;


		  MyLiveChat.LoadingHandlers.push(function (funcself) {
			  MyLiveChat_RunLoadingHandler('chatinline', funcself);
		  });

		  MyLiveChat.ResourcesVary ="\x26culture=en-US\x26mlcv=3006\x26template=1";

   	

   	

		  MyLiveChat['chatinline' + "_script_tag"] = MyLiveChat_GetLastScriptTag();

		  if (typeof (MyLiveChat_Initialize) != "undefined") {
			  MyLiveChat_Initialize()
		  }
		  else if (!MyLiveChat.MultiLinked) {
			  MyLiveChat_ImportCss(MyLiveChat.UrlBase + "chatinline.css");
			  MyLiveChat_DocWrite("<script defer='defer' src='" + MyLiveChat.UrlBase + "resources2.aspx?HCCID=" + MyLiveChat.HCCID + MyLiveChat.ResourcesVary + "'></scr" + "ipt>");
			  MyLiveChat_DocWrite("<script defer='defer' src='" + MyLiveChat.UrlBase + "script/livechatinit2.js'></scr" + "ipt>");
		  }


   	