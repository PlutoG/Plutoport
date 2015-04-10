/* DO NOT EDIT. THIS IS A CACHE FILE AND WILL GET OVERWRITTEN RANDOMLY.
INSTEAD EDIT THE TEMPLATE FROM WITHIN THE ADMIN ZONE, OR BY MANUALLY EDITING A TEMPLATES_CUSTOM OVERRIDE. */

"use strict";if(typeof window.page_loaded=='undefined')
{window.page_loaded=false;window.page_fully_loaded=false;}
function script_load_stuff()
{if(window.page_loaded)return;var i;if(window==window.top&&!window.opener||window.name=='')window.name='_site_opener';if(typeof document.documentElement.ontouchstart!='undefined')document.body.className+=' touch_enabled';var preloader=new Image();var images=[];images[0]='http://localhost:47370//themes/default/images/menus/menu_bullet_hover.png'.replace(/^https?:/,window.location.protocol);images[1]='http://localhost:47370//themes/default/images/menus/menu_bullet_expand_hover.png'.replace(/^https?:/,window.location.protocol);images[2]='http://localhost:47370//themes/default/images/expand.png'.replace(/^https?:/,window.location.protocol);images[3]='http://localhost:47370//themes/default/images/contract.png'.replace(/^https?:/,window.location.protocol);images[4]='http://localhost:47370//themes/default/images/exp_con.png'.replace(/^https?:/,window.location.protocol);images[5]='http://localhost:47370//themes/default/images/loading.gif'.replace(/^https?:/,window.location.protocol);for(i=0;i<images.length;i++)preloader.src=images[i];handle_textarea_scrolling();if((!window.parent)||(window.parent==window))
{if(typeof window.server_timestamp!='undefined')
{set_cookie('client_time',new Date().toString(),120);set_cookie('client_time_ref',window.server_timestamp,120);}}
for(i=0;i<document.forms.length;i++)
{new_html__initialise(document.forms[i]);}
for(i=0;i<document.links.length;i++)
{new_html__initialise(document.links[i]);}
for(i=0;i<document.images.length;i++)
{new_html__initialise(document.images[i]);}
if(typeof window.script_load_stuffStaff!='undefined')script_load_stuffStaff();window.mouseX=0;window.mouseY=0;window.ctrlPressed=false;window.altPressed=false;window.metaPressed=false;window.shiftPressed=false;add_event_listener_abstract(document.body,'mousemove',get_mouse_xy);if(typeof window.addEventListener!='undefined')
window.addEventListener('click',capture_click_key_states,true);if(document.getElementsByTagName('base')[0])
{for(i=0;i<document.links.length;i++)
{var href=document.links[i].getAttribute('href');if((href)&&(href.substr(0,1)=='#'))
{document.links[i].setAttribute('href',window.location.href.replace(/#.*$/,'')+href);}}}
var stuck_navs=get_elements_by_class_name(document,'stuck_nav');if(stuck_navs.length>0)
{add_event_listener_abstract(window,'scroll',function(){for(var i=0;i<stuck_navs.length;i++)
{var stuck_nav=stuck_navs[i];var stuck_nav_height=(typeof stuck_nav.real_height=='undefined')?find_height(stuck_nav,true,true):stuck_nav.real_height;stuck_nav.real_height=stuck_nav_height;var pos_y=find_pos_y(stuck_nav.parentNode);if(stuck_nav_height<get_window_height()-260)
{var extra_height=(get_window_scroll_y()-pos_y);if(extra_height>0)
{var width=find_width(stuck_nav);var height=find_height(stuck_nav);var stuck_nav_width=find_width(stuck_nav,true,true);stuck_nav.parentNode.style.width=width+'px';stuck_nav.parentNode.style.height=height+'px';stuck_nav.style.position='fixed';stuck_nav.style.top='0px';stuck_nav.style.width=stuck_nav_width+'px';}else
{stuck_nav.parentNode.style.width='';stuck_nav.parentNode.style.height='';stuck_nav.style.position='';stuck_nav.style.top='';stuck_nav.style.width='';}}else
{stuck_nav.parentNode.style.width='';stuck_nav.parentNode.style.height='';stuck_nav.style.position='';stuck_nav.style.top='';stuck_nav.style.width='';}}});}
var font_size=read_cookie('font_size');if(font_size!='')
{set_font_size(font_size);}
window["__flash__removeCallback"]=function(instance,name){try{if(instance){instance[name]=null;}}catch(flashEx){}};if(typeof window.script_load_stuff_b!='undefined')window.script_load_stuff_b();page_loaded=true;add_event_listener_abstract(window,'real_load',function(){script_page_rendered();page_fully_loaded=true;});if((typeof window.ocp_is_staff!='undefined')&&(window.ocp_is_staff)&&(typeof window.script_load_stuff_staff!='undefined'))script_load_stuff_staff();}
function set_font_size(size)
{var old_size=read_cookie('font_size');var old_sizer=document.getElementById('font_size_'+old_size);if(old_sizer)old_sizer.className=old_sizer.className.replace(/ selected/g,'');document.body.style.fontSize=size+'px';set_cookie('font_size',size,120);var new_sizer=document.getElementById('font_size_'+size);if(new_sizer)new_sizer.className+=' selected';}
function new_html__initialise(element)
{switch(element.nodeName.toLowerCase())
{case'img':if(element.className=='gd_text')
{var span=document.createElement('span');if(typeof span.style.writingMode=='string')
{element.style.display='none';span.style.writingMode='tb-lr';if(span.style.writingMode!='tb-lr')
span.style.writingMode='vertical-lr';span.style.webkitWritingMode='vertical-lr';span.style.mozWritingMode='vertical-lr';span.style.whiteSpace='nowrap';if(typeof span.textContent!='undefined')
{span.textContent=element.alt;}else
{set_inner_html(span,escape_html(element.alt));}
element.parentNode.insertBefore(span,element);}else
if(typeof span.style.msTransform=='string'||typeof span.style.webkitTransform=='string'||typeof span.style.MozTransform=='string'||typeof span.style.transform=='string')
{element.style.display='none';span.style.msTransform='rotate(90deg)';span.style.webkitTransform='rotate(90deg)';span.style.MozTransform='rotate(90deg)';span.style.transform='rotate(90deg)';span.style.msTransformOrigin='bottom left';span.style.webkitTransformOrigin='bottom left';span.style.MozTransformOrigin='bottom left';span.style.transformOrigin='bottom left';span.style.top='-1em';span.style.left='0.5em';span.style.position='relative';span.style.display='inline-block';span.style.whiteSpace='nowrap';span.style.paddingRight='0.5em';element.parentNode.style.textAlign='left';element.parentNode.style.width='1em';element.parentNode.style.overflow='hidden';element.parentNode.style.verticalAlign='top';if(typeof span.textContent!='undefined')
{span.textContent=element.alt;}else
{set_inner_html(span,escape_html(element.alt));}
element.parentNode.insertBefore(span,element);window.setTimeout(function(){if(element.parentNode.nodeName.toLowerCase()=='th'||element.parentNode.nodeName.toLowerCase()=='td')
{element.parentNode.style.height=find_width(span)+'px';}else
{element.parentNode.style.minHeight=find_width(span)+'px';}},0);}}
convert_tooltip(element);break;case'a':var rel=element.getAttribute('rel');if(rel&&rel.match(/(^|\s)lightbox($|\s)/))
{element.onclick=function(element){return function(){open_image_into_lightbox(element);return false;}}(element);element.title=element.title.replace('(this link will open in a new window)','');if(element.title==' ')element.title='';}
convert_tooltip(element);break;case'form':if(element.className.indexOf('autocomplete')!=-1)
{element.setAttribute('autocomplete','on');}else
{var dont_autocomplete=['edit_username','edit_password'];for(var j=0;j<dont_autocomplete.length;j++)
if(element.elements[dont_autocomplete[j]])element.elements[dont_autocomplete[j]].setAttribute('autocomplete','off');}
if(typeof window.load_html_edit!='undefined')
{load_html_edit(element);}
if(element.getAttribute('target')!='_blank')
add_event_listener_abstract(element,'mouseover',function(){try{element.setAttribute('title','');element.title='';}catch(e){};});var elements,j;elements=element.elements;for(j=0;j<elements.length;j++)
{if(typeof elements[j].title!='undefined')
{convert_tooltip(elements[j]);}}
elements=element.getElementsByTagName('input');for(j=0;j<elements.length;j++)
{if((elements[j].type=='image')&&(typeof elements[j].title!='undefined'))
{convert_tooltip(elements[j]);}}
break;}}
function initialise_error_mechanism()
{window.onerror=function(msg,file,code)
{if(typeof msg.indexOf=='undefined')return null;if((msg.indexOf('AJAX_REQUESTS is not defined')!=-1)||(((msg.indexOf("'null' is not an object")!=-1)||(msg.indexOf("'undefined' is not a function")!=-1))&&((typeof file=='undefined')||(file=='undefined')))||((code=='0')&&(msg.indexOf('Script error.')!=-1))||(msg.indexOf("attempt to run compile-and-go script on a cleared scope")!=-1)||(msg.indexOf('UnnamedClass.toString')!=-1)||(msg.indexOf('ASSERT: ')!=-1)||((file)&&(file.indexOf('TODO: FIXME')!=-1))||(msg.indexOf('TODO: FIXME')!=-1)||(msg.indexOf('Location.toString')!=-1)||(msg.indexOf('Error loading script')!=-1)||(msg.indexOf('NS_ERROR_FAILURE')!=-1)||(msg.indexOf('can only be used in extension processes')!=-1)||(msg.indexOf('extension.')!=-1)||false)
return null;if((typeof window.done_one_error=='undefined')||(!window.done_one_error))
{window.done_one_error=true;var alert='An error occurred when loading this screen onto the web browser. You are being notified of this as you are staff. If you believe this is a bug in the website software, please contact ocProducts with full details. More details are available in your browser\'s error console. The error was:\n\n'+code+': '+msg+'\n'+file;if(window.document.body)
window.fauxmodal_alert(alert,null,'An error has occurred');}
return false;};add_event_listener_abstract(window,'unload',function(){window.onerror=null;});}
if((typeof window.take_errors!='undefined')&&(window.take_errors))initialise_error_mechanism();window.unloaded=false;add_event_listener_abstract(window,'unload',function(){window.unloaded=true;});function staff_unload_action()
{undo_staff_unload_action();if(document.activeElement&&typeof document.activeElement.href!='undefined'&&document.activeElement.href!=null)
{var url=document.activeElement.href.replace(/.*:\/\/[^\/:]+/,'');if(url.indexOf('download')!=-1||url.indexOf('export')!=-1)
return;}
var bi=document.getElementById('main_website_inner');if(bi)
{bi.className+=' site_unloading';if(typeof window.fade_transition!='undefined')
{fade_transition(bi,20,30,-4);}}
var div=document.createElement('div');div.className='unload_action';div.style.width='100%';div.style.top=(get_window_height()/2-160)+'px';div.style.position='absolute';div.style.zIndex=10000;div.style.textAlign='center';set_inner_html(div,'<span aria-busy="true" class="loading_box box"><h2>Loading&hellip;</h2><img id="loading_image" alt="" src="'+'http://localhost:47370//themes/default/images/loading.gif'.replace(/^https?:/,window.location.protocol)+'" /></span>');window.setTimeout(function(){if(document.getElementById('loading_image'))document.getElementById('loading_image').src+='';},100);document.body.appendChild(div);if(typeof window.scrollTo!='undefined')
{try
{window.scrollTo(0,0);}
catch(e){};}
add_event_listener_abstract(window,'pageshow',undo_staff_unload_action);add_event_listener_abstract(window,'keydown',undo_staff_unload_action);add_event_listener_abstract(window,'click',undo_staff_unload_action);}
function undo_staff_unload_action()
{var pre=get_elements_by_class_name(document.body,'unload_action');for(var i=0;i<pre.length;i++)
{pre[i].parentNode.removeChild(pre[i]);}
var bi=document.getElementById('main_website_inner');if(bi)
{if((typeof window.fade_transition_timers!='undefined')&&(window.fade_transition_timers[bi.fader_key]))
{window.clearTimeout(window.fade_transition_timers[bi.fader_key]);window.fade_transition_timers[bi.fader_key]=null;}
bi.className=bi.className.replace(/ site_unloading/g,'');}}
function check_field_for_blankness(field,event)
{if(!field)return true;if(typeof field.nodeName=='undefined')return true;var value;if(field.nodeName.toLowerCase()=='select')
{value=field.options[field.selectedIndex].value;}else
{value=field.value;}
var ee=document.getElementById('error_'+field.id);if((value.replace(/\s/g,'')=='')||(value=='****')||(value=='Make your post civil and relevant.'))
{if(event)
{cancel_bubbling(event);}
if(ee!==null)
{ee.style.display='block';set_inner_html(ee,'This is a required field so needs filling in');}
window.fauxmodal_alert('Please check back over the form - you did not fill in all fields on the form correctly');return false;}
if(ee!==null)
{ee.style.display='none';}
return true;}
function disable_button_just_clicked(input)
{if(input.nodeName.toLowerCase()=='form')
{for(var i=0;i<input.elements.length;i++)
if((input.elements[i].type=='submit')||(input.elements[i].type=='button')||(input.elements[i].type=='image')||(input.elements[i].nodeName.toLowerCase()=='button'))
disable_button_just_clicked(input.elements[i]);return;}
if(input.form.target=='_blank')return;window.setTimeout(function(){input.disabled=true;input.under_timer=true;},20);input.style.cursor='wait';var goback=function(){input.disabled=false;input.under_timer=false;input.style.cursor='default';};window.setTimeout(goback,5000);add_event_listener_abstract(window,'pagehide',goback);}
function manage_scroll_height(ob)
{var height=ob.scrollHeight+3;if((height>5)&&(sts(ob.style.height)<height-3)&&(find_height(ob)<height-3))
{ob.style.height=height+'px';ob.style.overflowY='hidden';trigger_resize();}}
function handle_textarea_scrolling()
{var i;var elements=document.getElementsByTagName('textarea');for(i=0;i<elements.length;i++)
{if(elements[i].className.indexOf('textarea_scroll')!=-1)
{elements[i].setAttribute('wrap','off');elements[i].style.overflow='auto';}}}
function generate_question_ui(message,button_set,window_title,fallback_message,callback)
{var image_set=[];if(typeof button_set.length=='undefined')
{var new_button_set=[];for(var s in button_set)
{new_button_set.push(button_set[s]);image_set.push(s);}
button_set=new_button_set;}
if((typeof window.showModalDialog!='undefined')||true)
{var height=180;if(button_set.length>4)height+=5*(button_set.length-4);var url=maintain_theme_in_link('http://localhost:47370//data/question_ui.php?message='+window.encodeURIComponent(message)+'&image_set='+window.encodeURIComponent(image_set.join(','))+'&button_set='+window.encodeURIComponent(button_set.join(','))+'&window_title='+window.encodeURIComponent(window_title)+keep_stub());window.faux_showModalDialog(url,null,'dialogWidth=440;dialogHeight='+height+';status=no;unadorned=yes',function(result)
{if((typeof result=='undefined')||(result===null))
{callback(button_set[0]);}else
{callback(result);}});return;}
if(button_set.length==1)
{window.fauxmodal_alert(fallback_message?fallback_message:message,function()
{callback(button_set[0]);},window_title);return;}else
if(button_set.length==2)
{window.fauxmodal_confirm(fallback_message?fallback_message:message,function(result)
{callback(result?button_set[1]:button_set[0]);},window_title);return;}else
{if(!fallback_message)
{message+='\n\nType either: ';for(var i=0;i<button_set.length;i++)
{message+=button_set[i]+',';}
message=message.substr(0,message.length-1);}else message=fallback_message;window.fauxmodal_prompt(message,'',function(result)
{if((typeof result=='undefined')||(result===null))
{callback(button_set[0]);return;}else
{if(result=='')
{callback(button_set[1]);return;}
for(var i=0;i<button_set.length;i++)
{if(result.toLowerCase()==button_set[i].toLowerCase())
{callback(result);return;}}}
callback(button_set[0]);return;},window_title);}}
function get_main_ocp_window(any_large_ok)
{if(typeof any_large_ok=='undefined')var any_large_ok=false;if(document.getElementById('main_website'))return window;if((any_large_ok)&&(get_window_width()>300))return window;try
{if((window.parent)&&(window.parent!=window)&&(typeof window.parent.get_main_ocp_window!='undefined'))return window.parent.get_main_ocp_window();}
catch(e){};try
{if((window.opener)&&(typeof window.opener.get_main_ocp_window!='undefined'))return window.opener.get_main_ocp_window();}
catch(e){};return window;}
function doc_onmouseout()
{if(typeof window.orig_helper_text!='undefined')
{var help=document.getElementById('help');if(!help)return;set_inner_html(help,window.orig_helper_text);if(typeof window.fade_transition!='undefined')
{set_opacity(help,0.0);fade_transition(help,100,30,4);}
help.className='global_helper_panel_text';}}
function doc_onmouseover(i)
{var doc=document.getElementById('doc_'+i);if((doc)&&(get_inner_html(doc)!=''))
{var help=document.getElementById('help');if(!help)return;window.orig_helper_text=get_inner_html(help);set_inner_html(help,get_inner_html(doc));if(typeof window.fade_transition!='undefined')
{set_opacity(help,0.0);fade_transition(help,100,30,4);}
help.className='global_helper_panel_text_over';}}
function script_page_rendered()
{}
function help_panel(show)
{var panel_right=document.getElementById('panel_right');var middles=get_elements_by_class_name(document,'global_middle');var global_message=document.getElementById('global_message');var helper_panel_contents=document.getElementById('helper_panel_contents');var helper_panel_toggle=document.getElementById('helper_panel_toggle');var i;if(show)
{panel_right.className=panel_right.className.replace(/ helper_panel_hidden/g,'');helper_panel_contents.setAttribute('aria-expanded','true');helper_panel_contents.style.display='block';if(typeof window.fade_transition!='undefined')
{set_opacity(helper_panel_contents,0.0);fade_transition(helper_panel_contents,100,30,4);}
if(read_cookie('hide_help_panel')=='1')set_cookie('hide_help_panel','0',100);helper_panel_toggle.onclick=function(){return help_panel(false);};helper_panel_toggle.childNodes[0].setAttribute('src','http://localhost:47370//themes/default/images/help_panel_hide.png'.replace(/^https?:/,window.location.protocol));}else
{if(read_cookie('hide_help_panel')=='')
{window.fauxmodal_confirm('You have chosen to contract the help panel, and it will remain so until you expand it again. It is not advised that you leave the panel contracted, as you may miss program help. Confirm if you sure you wish to contract the help panel (and save a cookie on your computer).',function(answer)
{if(answer)
_hide_help_panel(middles,panel_right,global_message,helper_panel_contents,helper_panel_toggle);});return false;}
_hide_help_panel(middles,panel_right,global_message,helper_panel_contents,helper_panel_toggle);}
return false;}
function _hide_help_panel(middles,panel_right,global_message,helper_panel_contents,helper_panel_toggle)
{panel_right.className+=' helper_panel_hidden';helper_panel_contents.setAttribute('aria-expanded','false');helper_panel_contents.style.display='none';set_cookie('hide_help_panel','1',100);helper_panel_toggle.onclick=function(){return help_panel(true);};helper_panel_toggle.childNodes[0].setAttribute('src','http://localhost:47370//themes/default/images/help_panel_show.png'.replace(/^https?:/,window.location.protocol));}
function sts(src)
{if(!src)return 0;if(src.indexOf('px')==-1)return 0;return window.parseInt(src.replace('px',''));}
function capture_click_key_states(event)
{window.capture_event=event;}
function magic_keypress(event)
{if(typeof window.capture_event!='undefined')event=window.capture_event;var count=0;if(event.shiftKey)count++;if(event.ctrlKey)count++;if(event.metaKey)count++;if(event.altKey)count++;return(count>=2);}
function escape_html(value)
{if(!value)return'';return value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(new RegExp('<','g'),'&lt;').replace(/>/g,'&gt;');}
function escape_comcode(value)
{return value.replace(/\\/g,'\\\\').replace(/"/g,'\\"');}
function create_rollover(rand,rollover)
{var img=document.getElementById(rand);if(!img)return;new Image().src=rollover;var activate=function()
{img.old_src=img.getAttribute('src');if(typeof img.origsrc!='undefined')img.old_src=img.origsrc;img.setAttribute('src',rollover);};var deactivate=function()
{img.setAttribute('src',img.old_src);};add_event_listener_abstract(img,"mouseover",activate);add_event_listener_abstract(img,"click",deactivate);add_event_listener_abstract(img,"mouseout",deactivate);}
function set_cookie(cookie_name,cookie_value,num_days)
{var today=new Date();var expire=new Date();if(num_days==null||num_days==0)num_days=1;expire.setTime(today.getTime()+3600000*24*num_days);var extra="";if("/"!="")extra=extra+";path=/";if(""!="")extra=extra+";domain=";var to_set=cookie_name+"="+encodeURIComponent(cookie_value)+";expires="+expire.toUTCString()+extra;document.cookie=to_set;var read=read_cookie(cookie_name);if((read!=cookie_value)&&(read))
{window.done_cookie_alert=true;}}
function read_cookie(cookie_name)
{var theCookie=""+document.cookie;var ind=theCookie.indexOf(' '+cookie_name+'=');if((ind==-1)&&(theCookie.substr(0,cookie_name.length+1)==cookie_name+'='))ind=0;else if(ind!=-1)ind++;if(ind==-1||cookie_name=="")return"";var ind1=theCookie.indexOf(';',ind);if(ind1==-1)ind1=theCookie.length;return window.decodeURIComponent(theCookie.substring(ind+cookie_name.length+1,ind1));}
function first_class_name(class_name)
{var p=class_name.indexOf(' ');if(p!=-1)
{return class_name.substr(0,p);}
return class_name;}
function element_has_class(element,class_name)
{if(typeof element.className=='undefined')return false;return(element.className.match(new RegExp('(^|\\s)'+class_name+'($|\\s)')));}
function get_elements_by_class_name(node,class_name)
{if(node)
{var a=[];var re=new RegExp('(^|\\s)'+class_name+'($|\\s)');var els=node.getElementsByTagName('*');for(var i=0,j=els.length;i<j;i++)
{if(re.test(els[i].className))a.push(els[i]);}
return a;}
return[];}
function is_integer(val)
{if(val=="")return false;var c;for(var i=0;i<val.length;i++)
{c=val.charAt(i);if((c!="0")&&(c!="1")&&(c!="2")&&(c!="3")&&(c!="4")&&(c!="5")&&(c!="6")&&(c!="7")&&(c!="8")&&(c!="9"))
return false;}
return true;}
function browser_matches(code)
{var browser=navigator.userAgent.toLowerCase();var os=navigator.platform.toLowerCase()+' '+browser;var _is_opera=browser.indexOf('opera')!=-1;var is_konqueror=browser.indexOf('konqueror')!=-1;var is_safari=browser.indexOf('applewebkit')!=-1;var is_chrome=browser.indexOf('chrome/')!=-1;var is_gecko=(browser.indexOf('gecko')!=-1)&&!_is_opera&&!is_konqueror&&!is_safari;var _is_ie=((browser.indexOf('msie')!=-1)||(browser.indexOf('trident')!=-1))&&!_is_opera;var is_ie_8=(browser.indexOf('msie 8')!=-1)&&(_is_ie);var is_ie_8_plus=is_ie_8;var is_ie_9=(browser.indexOf('msie 9')!=-1)&&(_is_ie);var is_ie_9_plus=is_ie_9&&!is_ie_8;var is_iceweasel=browser.indexOf('iceweasel')!=-1;switch(code)
{case'ios':return browser.indexOf('iphone')!=-1||browser.indexOf('ipad')!=-1;case'android':return browser.indexOf('android')!=-1;case'wysiwyg':if('1'=='0')return false;return true;case'windows':return os.indexOf('windows')!=-1||os.indexOf('win32')!=-1;case'mac':return os.indexOf('mac')!=-1;case'linux':return os.indexOf('linux')!=-1;case'opera':return _is_opera;case'ie':return _is_ie;case'ie8':return is_ie_8;case'ie8+':return is_ie_8_plus;case'ie9':return is_ie_9;case'ie9+':return is_ie_9_plus;case'chrome':return is_chrome;case'gecko':return is_gecko;case'konqueror':return is_konqueror;case'safari':return is_safari;}
return false;}
function get_base_url()
{return(window.location+'').replace(/(^.*:\/\/[^\/]*)\/.*/,'$1')+'/'.replace(/^.*:\/\/[^\/]*/,'');}
function confirm_session(callback)
{if(typeof window.do_ajax_request=='undefined')return;var url='//data/confirm_session.php'+keep_stub(true);var ret=null;require_javascript("javascript_ajax");if(typeof window.do_ajax_request!='undefined')ret=do_ajax_request(url+keep_stub(true),false);if(!ret)return;if(ret&&ret.responseText==='')
{callback(true);return;}
if(ret.responseText=='Guest')
{window.fauxmodal_prompt('Username','',function(promptt)
{_confirm_session(callback,promptt,url);},'Login');return;}
_confirm_session(callback,ret.responseText,url);}
function _confirm_session(callback,username,url)
{window.fauxmodal_prompt('Enter your password','',function(promptt)
{if(promptt!==null)
{var ret=do_ajax_request(url,false,'login_username='+window.encodeURIComponent(username)+'&password='+window.encodeURIComponent(promptt));if(ret&&ret.responseText==='')
callback(true);else
_confirm_session(callback,username,url);}else callback(false);},'Login','password');}
function load_snippet(code,post,callback)
{var title=get_inner_html(document.getElementsByTagName('title')[0]);title=title.replace(/ \u2013 .*/,'');var metas=document.getElementsByTagName('link');var i;if(!window.location)return null;var url=window.location.href;for(i=0;i<metas.length;i++)
{if(metas[i].getAttribute('rel')=='canonical')url=metas[i].getAttribute('href');}
if(!url)url=window.location.href;var html;if(typeof window.do_ajax_request!='undefined')
{var url2="//data/snippet.php?snippet="+code+"&url="+window.encodeURIComponent(url)+'&title='+window.encodeURIComponent(title)+keep_stub();html=do_ajax_request(maintain_theme_in_link(url2),callback,post);}
if(callback)return null;return html.responseText;}
function require_css(sheet)
{if(document.getElementById('loading_css_'+sheet))return;var link=document.createElement('link');link.setAttribute('id','loading_css_'+sheet);link.setAttribute('type',"text/css");link.setAttribute('rel',"stylesheet");link.setAttribute('href',"//data/sheet.php?sheet="+sheet+keep_stub());document.getElementsByTagName('head')[0].appendChild(link);}
function require_javascript(script,lang)
{if(document.getElementById('loading_js_'+script))return;var link=document.createElement('script');link.setAttribute('id','loading_js_'+script);link.setAttribute('type',"text/javascript");var url="//data/javascript.php?script="+script+keep_stub();if(lang)url=url+"&lang="+lang;link.setAttribute('src',url);document.getElementsByTagName('head')[0].appendChild(link);}
function find_url_tab()
{if(window.location.hash.replace(/^#/,'')!='')
{var tab=window.location.hash.replace(/^#/,'').replace(/^tab\_\_/,'');if(document.getElementById('g_'+tab))
{select_tab('g',tab);}
else if((tab.indexOf('__')!=-1)&&(document.getElementById('g_'+tab.substr(0,tab.indexOf('__')))))
{var old=window.location.hash;select_tab('g',tab.substr(0,tab.indexOf('__')));window.location.hash=old;}}}
function select_tab(id,tab,automated)
{if(typeof automated=='undefined')automated=false;var tab_marker=document.getElementById('tab__'+tab.toLowerCase());if(tab_marker)
{tab_marker.id='';window.location.hash='#tab__'+tab.toLowerCase();tab_marker.id='tab__'+tab.toLowerCase();}
var tabs=[];var i,element;element=document.getElementById('t_'+tab);for(i=0;i<element.parentNode.childNodes.length;i++)
{if((element.parentNode.childNodes[i].id)&&(element.parentNode.childNodes[i].id.substr(0,2)=='t_'))
tabs.push(element.parentNode.childNodes[i].id.substr(2));}
for(i=0;i<tabs.length;i++)
{element=document.getElementById(id+'_'+tabs[i]);if(element)
{if(tabs[i]==tab)
{element.style.display='block';element.style.visibility='';element.style.overflow='';element.style.width='';element.style.height='';}else
{element.style.visibility='hidden';element.style.overflow='hidden';element.style.width='0';element.style.height='0';}
if((typeof window.fade_transition!='undefined')&&(tabs[i]==tab))
{if(typeof window['load_tab__'+tab]=='undefined')
{set_opacity(element,0.0);fade_transition(element,100,30,8);}}}
element=document.getElementById('t_'+tabs[i]);if(element)
{if(element.className.indexOf('tab_active')!=-1)
element.className=element.className.replace(/ tab_active/g,'');if(tabs[i]==tab)element.className+=' tab_active';}}
if(typeof window['load_tab__'+tab]!='undefined')window['load_tab__'+tab](automated);return false;}
function set_display_with_aria(element,mode)
{element.style.display=mode;element.setAttribute('aria-hidden',(mode=='none')?'true':'false');}
function toggleable_tray(element,no_animate,cookie_id_name)
{if(typeof element=='string')element=document.getElementById(element);if(!element)return;if(element.className.indexOf('toggleable_tray')==-1)
{var toggleables=get_elements_by_class_name(element,'toggleable_tray');if(typeof toggleables[0]!='undefined')element=toggleables[0];}
if(typeof cookie_id_name!='undefined')
{set_cookie('tray_'+cookie_id_name,(element.style.display=='none')?'open':'closed');}
var type='block';if(element.nodeName.toLowerCase()=='table')type='table';if(element.nodeName.toLowerCase()=='tr')type='table-row';var _pic=get_elements_by_class_name(element.parentNode,'toggleable_tray_button');var pic;if(typeof _pic[0]!='undefined')
{pic=_pic[0].getElementsByTagName('img')[0];}else
{pic=document.getElementById('e_'+element.id);}
if((pic)&&(pic.src=='http://localhost:47370//themes/default/images/exp_con.png'.replace(/^https?:/,window.location.protocol)))return;element.setAttribute('aria-expanded',(type=='none')?'false':'true');if(element.style.display=='none')
{element.style.display=type;if((type=='block')&&(element.nodeName.toLowerCase()=='div')&&(!no_animate)&&((!pic)||(pic.src.indexOf('themewizard.php')==-1)))
{element.style.visibility='hidden';element.style.width=find_width(element)+'px';element.style.position='absolute';if(pic)
{pic.src='http://localhost:47370//themes/default/images/exp_con.png'.replace(/^https?:/,window.location.protocol);}
window.setTimeout(function(){begin_toggleable_tray_animation(element,20,70,-1,pic);},20);}else
{if(typeof window.fade_transition!='undefined')
{set_opacity(element,0.0);fade_transition(element,100,30,4);}
if(pic)
{pic.src=((pic.src.indexOf('themewizard.php')!=-1)?pic.src.replace('expand','contract'):'http://localhost:47370//themes/default/images/contract.png').replace(/^https?:/,window.location.protocol);}}}else
{if((type=='block')&&(element.nodeName.toLowerCase()=='div')&&(!no_animate)&&((!pic)||(pic.src.indexOf('themewizard.php')==-1)))
{if(pic)
{pic.src='http://localhost:47370//themes/default/images/exp_con.png'.replace(/^https?:/,window.location.protocol);}
window.setTimeout(function(){begin_toggleable_tray_animation(element,-20,70,0,pic);},20);}else
{if(pic)
{pic.src=((pic.src.indexOf("themewizard.php")!=-1)?pic.src.replace('contract','expand'):'http://localhost:47370//themes/default/images/expand.png').replace(/^https?:/,window.location.protocol);pic.setAttribute('alt',pic.getAttribute('alt').replace('Contract','Expand'));pic.title='Expand';pic.ocp_tooltip_title='Expand';}
element.style.display='none';}}
trigger_resize(true);return false;}
function begin_toggleable_tray_animation(element,animate_dif,animate_ticks,final_height,pic)
{var fullHeight=find_height(element,true);if(final_height==-1)
{final_height=fullHeight;element.style.height='0px';element.style.visibility='visible';element.style.position='static';}
if(fullHeight>300)
{animate_dif*=6;}
element.style.outline='1px dashed gray';if(typeof window.fade_transition!='undefined')
{if(final_height==0)
{set_opacity(element,1.0);fade_transition(element,0,30,4);}else
{set_opacity(element,0.0);fade_transition(element,100,30,4);}}
var orig_overflow=element.style.overflow;element.style.overflow='hidden';if(browser_matches('firefox'))element.parentNode.style.overflow='hidden';window.setTimeout(function(){toggleable_tray_animate(element,final_height,animate_dif,orig_overflow,animate_ticks,pic);},animate_ticks);}
function toggleable_tray_animate(element,final_height,animate_dif,orig_overflow,animate_ticks,pic)
{var current_height=((element.style.height=='auto')||(element.style.height==''))?(find_height(element)):sts(element.style.height);if(((current_height>final_height)&&(animate_dif<0))||((current_height<final_height)&&(animate_dif>0)))
{var num=Math.max(current_height+animate_dif,0);if(animate_dif>0)num=Math.min(num,final_height);element.style.height=num+'px';window.setTimeout(function(){toggleable_tray_animate(element,final_height,animate_dif,orig_overflow,animate_ticks,pic);},animate_ticks);}else
{element.style.height='auto';if(animate_dif<0)
{element.style.display='none';}
element.style.overflow=orig_overflow;if(browser_matches('firefox'))element.parentNode.style.overflow='';element.style.outline='0';if(pic)
{pic.src=((animate_dif<0)?'http://localhost:47370//themes/default/images/expand.png':'http://localhost:47370//themes/default/images/contract.png').replace(/^https?:/,window.location.protocol);pic.setAttribute('alt',pic.getAttribute('alt').replace((animate_dif<0)?'Contract':'Expand',(animate_dif<0)?'Expand':'Contract'));pic.ocp_tooltip_title=(animate_dif<0)?'Expand':'Contract';}
trigger_resize(true);}}
function handle_tray_cookie_setting(id)
{var cookie_value=read_cookie('tray_'+id);var element=document.getElementById('tray_'+id);if(!element)element=document.getElementById(id);if(!element)return;if(element.className.indexOf('toggleable_tray')==-1)
{var toggleables=get_elements_by_class_name(element,'toggleable_tray');if(typeof toggleables[0]!='undefined')element=toggleables[0];}
if(((element.style.display=='none')&&(cookie_value=='open'))||((element.style.display!='none')&&(cookie_value=='closed')))
toggleable_tray(element,true);}
function animate_frame_load(pf,frame,leave_gap_top)
{if(!pf)return;if(typeof leave_gap_top=='undefined')var leave_gap_top=0;pf.style.height=window.top.get_window_height()+'px';illustrate_frame_load(pf,frame);var ifuob=window.top.document.getElementById('iframe_under');var extra=ifuob?((window!=window.top)?find_pos_y(ifuob):0):0;if(ifuob)ifuob.scrolling='no';if(window==window.top)
window.top.smooth_scroll(find_pos_y(pf)+extra-leave_gap_top);}
function illustrate_frame_load(pf,frame)
{var head='<style type="text/css">',cssText='';if(!browser_matches('ie8'))
{for(var i=0;i<document.styleSheets.length;i++)
{try
{if((typeof document.styleSheets[i].href!='undefined')&&(document.styleSheets[i].href)&&(document.styleSheets[i].href.indexOf('/global')==-1))continue;if(typeof document.styleSheets[i].cssText!='undefined')
{cssText+=document.styleSheets[i].cssText;}else
{var rules=[];try{rules=document.styleSheets[i].cssRules?document.styleSheets[i].cssRules:document.styleSheets[i].rules;}
catch(e){};if(rules)
{for(var j=0;j<rules.length;j++)
{if(rules[j].cssText)
cssText+=rules[j].cssText+"\n\n";else
cssText+=rules[j].selectorText+'{ '+rules[j].style.cssText+"}\n\n";}}}}
catch(e){};}}
head+=cssText+'<\/style>';if(!window.frames[frame])return;if(!window.frames[frame].document)return;var doc=window.frames[frame].document;if(!doc)return;var de=doc.documentElement;if(!de)return;var body=de.getElementsByTagName('body');if(body.length==0)
{set_inner_html(de,'<head>'+head+'<\/head><body aria-busy="true" class="website_body"><div class="spaced"><div class="ajax_tree_list_loading vertical_alignment"><img id="loading_image" src="'+'http://localhost:47370//themes/default/images/loading.gif'.replace(/^https?:/,window.location.protocol)+'" alt="Loading&hellip;" /> <span class="vertical_alignment">Loading&hellip;<\/span><\/div><\/div><\/body>');}else
{body[0].className='website_body';var head_element=de.getElementsByTagName('head')[0];if(!head_element)
{head_element=document.createElement('head');de.appendChild(head_element);}
if(de.getElementsByTagName('style').length==0)
set_inner_html(head_element,head);set_inner_html(body[0],'<div aria-busy="true" class="spaced"><div class="ajax_tree_list_loading"><img id="loading_image" class="vertical_alignment" src="'+'http://localhost:47370//themes/default/images/loading.gif'.replace(/^https?:/,window.location.protocol)+'" alt="Loading&hellip;" /> <span class="vertical_alignment">Loading&hellip;<\/span><\/div><\/div>');}
var the_frame=window.frames[frame];window.setTimeout(function(){if(the_frame.document&&the_frame.document.getElementById('loading_image'))
{var i_new=document.createElement('img');i_new.src=the_frame.document.getElementById('loading_image').src;var i_default=the_frame.document.getElementById('loading_image');if(i_default)
{i_new.className=i_default.className;i_new.alt=i_default.alt;i_new.id=i_default.id;i_default.parentNode.replaceChild(i_new,i_default);}}},0);var style=de.getElementsByTagName('style')[0];if((style)&&(style.styleSheet))style.styleSheet.cssText=cssText;}
function smooth_scroll(dest_y,expected_scroll_y,dir,event_after)
{var scroll_y=get_window_scroll_y();if(typeof dest_y=='string')dest_y=find_pos_y(document.getElementById(dest_y),true);if(dest_y<0)dest_y=0;if((typeof expected_scroll_y!='undefined')&&(expected_scroll_y!=null)&&(expected_scroll_y!=scroll_y))return;if(typeof dir=='undefined'||!null)var dir=(dest_y>scroll_y)?1:-1;var distance_to_go=(dest_y-scroll_y)*dir;var dist=Math.round(dir*(distance_to_go/25));if(dir==-1&&dist>-25)dist=-25;if(dir==1&&dist<25)dist=25;if(((dir==1)&&(scroll_y+dist>=dest_y))||((dir==-1)&&(scroll_y+dist<=dest_y))||(distance_to_go>2000))
{try
{window.scrollTo(0,dest_y);}
catch(e){};if(event_after)event_after();return;}
try
{window.scrollBy(0,dist);}
catch(e){return;};window.setTimeout(function(){smooth_scroll(dest_y,scroll_y+dist,dir,event_after);},30);}
function abstract_get_computed_style(obj,property)
{if(obj.currentStyle)
{var index=property.indexOf('-');if(index!=-1)
{property=property.substring(0,index)+property.substring(index+1,index+2).toUpperCase()+property.substring(index+2,property.length);}
return obj.currentStyle[property];}
var ret=null;try{ret=document.defaultView.getComputedStyle(obj,null).getPropertyValue(property);}
catch(e){}
if(ret===null)ret='';return ret;}
function change_class(box,theId,to,from)
{var cell=document.getElementById(theId);if(!cell)cell=theId;cell.className=(box.checked)?to:from;}
function get_mouse_xy(e,win)
{if(typeof win=='undefined')var win=window;win.mouseX=get_mouse_x(e,win);win.mouseY=get_mouse_y(e,win);win.ctrlPressed=e.ctrlKey;win.altPressed=e.altKey;win.metaPressed=e.metaKey;win.shiftPressed=e.shiftKey;return true}
function get_mouse_x(event,win)
{if(typeof win=='undefined')var win=window;try
{if((typeof event.pageX!='undefined')&&(event.pageX))
{return event.pageX;}else if((typeof event.clientX!='undefined')&&(event.clientX))
{return event.clientX+get_window_scroll_x(win)}}
catch(err){}
return 0;}
function get_mouse_y(event,win)
{if(typeof win=='undefined')var win=window;try
{if((typeof event.pageY!='undefined')&&(event.pageY))
{return event.pageY;}else if((typeof event.clientY!='undefined')&&(event.clientY))
{return event.clientY+get_window_scroll_y(win)}}
catch(err){}
return 0;}
function get_window_width(win)
{if(typeof win=='undefined')var win=window;if(typeof win.innerWidth!='undefined')return win.innerWidth-18;if((win.document.documentElement)&&(win.document.documentElement.clientWidth))return win.document.documentElement.clientWidth;if((win.document.body)&&(win.document.body.clientWidth))return win.document.body.clientWidth;return 0;}
function get_window_height(win)
{if(typeof win=='undefined')var win=window;if(typeof win.innerHeight!='undefined')return win.innerHeight-18;if((win.document.documentElement)&&(win.document.documentElement.clientHeight))return win.document.documentElement.clientHeight;if((win.document.body)&&(win.document.body.clientHeight))return win.document.body.clientHeight;return 0;}
function get_window_scroll_width(win)
{if(typeof win=='undefined')var win=window;return win.document.body.scrollWidth;}
function get_window_scroll_height(win)
{if(typeof win=='undefined')var win=window;var best=win.document.body.parentNode.offsetHeight;if(((win.document.body.offsetHeight>best)&&(win.document.body.offsetHeight!=150))||(best==150))best=win.document.body.offsetHeight;if(((win.document.body.parentNode.scrollHeight)&&(win.document.body.parentNode.scrollHeight!=150))||(best==150))best=win.document.body.parentNode.scrollHeight;if(((win.document.body.scrollHeight>best)&&(best<150)&&(win.document.body.scrollHeight!=150))||(best==150))best=win.document.body.scrollHeight;return best;}
function get_window_scroll_x(win)
{if(typeof win=='undefined')var win=window;if(typeof win.pageXOffset!='undefined')return win.pageXOffset;if((win.document.documentElement)&&(win.document.documentElement.scrollLeft))return win.document.documentElement.scrollLeft;if((win.document.body)&&(win.document.body.scrollLeft))return win.document.body.scrollLeft;if(typeof win.scrollX!='undefined')return win.scrollX;return 0;}
function get_window_scroll_y(win)
{if(typeof win=='undefined')var win=window;if(typeof win.pageYOffset!='undefined')return win.pageYOffset;if((win.document.documentElement)&&(win.document.documentElement.scrollTop))return win.document.documentElement.scrollTop;if((win.document.body)&&(win.document.body.scrollTop))return win.document.body.scrollTop;if(typeof win.scrollTop!='undefined')return win.scrollTop;return 0;}
function find_pos_x(obj,not_relative)
{if(typeof not_relative=='undefined')var not_relative=false;if(!obj&&typeof window.console!='undefined'){console.log(find_pos_x.caller);return 0;}
var call_obj=obj;var curleft=0;if(obj.offsetParent)
{while(obj.offsetParent)
{if(((abstract_get_computed_style(obj,'position')=='absolute')||(abstract_get_computed_style(obj,'position')=='relative'))&&(!not_relative))
{if(obj==call_obj)curleft+=obj.offsetLeft;break;}
curleft+=obj.offsetLeft;obj=obj.offsetParent;}}
else if(typeof obj.x!='undefined')curleft+=obj.x;return curleft;}
function find_pos_y(obj,not_relative)
{if(typeof not_relative=='undefined')var not_relative=false;if(!obj&&typeof window.console!='undefined'){console.log(find_pos_y.caller);return 0;}
var call_obj=obj;var curtop=0;if(obj.offsetParent)
{while(obj.offsetParent)
{if(((abstract_get_computed_style(obj,'position')=='absolute')||(abstract_get_computed_style(obj,'position')=='relative'))&&(!not_relative))
{if(obj==call_obj)curtop+=obj.offsetTop;break;}
curtop+=obj.offsetTop;obj=obj.offsetParent;}}
else if(typeof obj.y!='undefined')curtop+=obj.y;return curtop;}
function find_width(obj,take_padding,take_margin,take_border)
{if(typeof take_padding=='undefined')var take_padding=false;if(typeof take_margin=='undefined')var take_margin=false;if(typeof take_border=='undefined')var take_border=false;if(!obj)return 0;var ret=obj.offsetWidth;if(take_padding)
{ret-=sts(abstract_get_computed_style(obj,'padding-left'));ret-=sts(abstract_get_computed_style(obj,'padding-right'));}
if(take_margin)
{ret-=sts(abstract_get_computed_style(obj,'margin-left'));ret-=sts(abstract_get_computed_style(obj,'margin-right'));}
if(take_border)
{ret-=sts(abstract_get_computed_style(obj,'border-left-width'));ret-=sts(abstract_get_computed_style(obj,'border-right-width'));}
return ret;}
function find_height(obj,take_padding,take_margin,take_border)
{if(typeof take_padding=='undefined')var take_padding=false;if(typeof take_margin=='undefined')var take_margin=false;if(typeof take_border=='undefined')var take_border=false;if(!obj)return 0;var ret=obj.offsetHeight;if(take_padding)
{ret-=sts(abstract_get_computed_style(obj,'padding-top'));ret-=sts(abstract_get_computed_style(obj,'padding-bottom'));}
if(take_margin)
{ret-=sts(abstract_get_computed_style(obj,'margin-top'));ret-=sts(abstract_get_computed_style(obj,'margin-bottom'));}
if(take_border)
{ret-=sts(abstract_get_computed_style(obj,'border-top-width'));ret-=sts(abstract_get_computed_style(obj,'border-bottom-width'));}
return ret;}
function enter_pressed(event,alt_char)
{if(typeof alt_char=='undefined')var alt_char=false;if(typeof event=='undefined')var event=window.event;if((alt_char)&&(((event.which)&&(event.which==alt_char.charCodeAt(0)))||((event.keyCode)&&(event.keyCode==alt_char.charCodeAt(0)))))return true;return(((event.which)&&(event.which==13))||((event.keyCode)&&(event.keyCode==13)));}
function key_pressed(event,key,no_error_if_bad)
{if(typeof event=='undefined')var event=window.event;if(typeof window.anykeyokay=='undefined')window.anykeyokay=false;if(key.constructor==Array)
{for(var i=0;i<key.length;i++)
{if(key[i]==null)
{if((event.keyCode)&&((window.anykeyokay)||(event.keyCode<48)||(event.keyCode==86)||(event.keyCode==91)||(event.keyCode==224))&&(event.keyCode!=32))
{window.anykeyokay=true;window.setTimeout(function(){window.anykeyokay=false;},5);return true;}}else
{if(key_pressed(event,key[i]))return true;}}
var targ;if(typeof event.target!='undefined')targ=event.target;else targ=event.srcElement;if(!no_error_if_bad)
{var current_bg=abstract_get_computed_style(targ,'background');if((typeof current_bg=='undefined')||(current_bg))current_bg='white';if(current_bg!='#FF8888')
window.setTimeout(function(){targ.style.background=current_bg;},400);targ.style.background='#FF8888';}
return false;}
if((key=='-')&&(event.keyCode==173))key=173;if((key=='-')&&(event.keyCode==189))key=189;if(key=='-')key=109;if((key=='.')&&(event.keyCode==190))key=190;if((key=='.')&&(event.keyCode==110))key=110;if((key=='_')&&(event.keyCode==173)&&(event.shiftKey))key=173;if((key=='_')&&(event.keyCode==189)&&(event.shiftKey))key=189;if(key=='_')key=0;if(key.constructor==String)
{if((event.shiftKey)&&(key.toUpperCase()==key.toLowerCase()))return false;key=key.toUpperCase().charCodeAt(0);if((event.keyCode)&&(event.keyCode>=96)&&(event.keyCode<106)&&(key>=48)&&(key<58))key+=48;}
return((typeof event.keyCode!='undefined')&&(event.keyCode==key));}
function convert_tooltip(element)
{var title=element.title;if((title!='')&&(element.className.indexOf('leave_native_tooltip')==-1))
{if(element.nodeName=='img'&&element.alt=='')element.alt=element.title;element.title='';if((element.childNodes.length==0)||((!element.childNodes[0].onmouseover)&&((!element.childNodes[0].title)||(element.childNodes[0].title==''))))
{if(element.innerText)
{var prefix=element.innerText+': ';if(title.substr(0,prefix.length)==prefix)
title=title.substring(prefix.length,title.length);else if(title==element.innerText)return;}
if(!element.onmouseout)element.onmouseout=function(){};if(!element.onmousemove)element.onmouseover=function(){};var win=get_main_ocp_window(true);element.ocp_tooltip_title=escape_html(title);win.add_event_listener_abstract(element,'mouseover',function(event){win.activate_tooltip(element,event,element.ocp_tooltip_title,null,null,null,null,false,false,false,win);});win.add_event_listener_abstract(element,'mousemove',function(event){win.reposition_tooltip(element,event,false,false,null,false,win);});win.add_event_listener_abstract(element,'mouseout',function(event){win.deactivate_tooltip(element,event);});}}}
function activate_tooltip(ac,myevent,tooltip,width,pic,height,bottom,no_delay,lights_off,force_width,win)
{if(typeof win=='undefined')var win=window;if(!page_loaded)return;if((typeof tooltip!='function')&&(tooltip==''))return;var existing_tooltips=get_elements_by_class_name(document.body,'tooltip');for(var i=0;i<existing_tooltips.length;i++)
{if(existing_tooltips[i].id!=ac.tooltipId)existing_tooltips[i].parentNode.removeChild(existing_tooltips[i]);}
if(!ac.onmouseout)ac.onmouseout=function(event){if(!event)var event=window.event;win.deactivate_tooltip(ac,event);};if(!ac.onmousemove)ac.onmousemove=function(event){if(!event)var event=window.event;win.reposition_tooltip(ac,event,false,false,null,false,win);};if(typeof tooltip=='function')tooltip=tooltip();if(tooltip=='')return;ac.is_over=true;ac.tooltip_on=false;ac.initial_width=width;var children=ac.getElementsByTagName('img');for(var i=0;i<children.length;i++)children[i].setAttribute('title','');var tooltip_element;if((typeof ac.tooltipId!='undefined')&&(document.getElementById(ac.tooltipId)))
{tooltip_element=win.document.getElementById(ac.tooltipId);tooltip_element.style.display='none';set_inner_html(tooltip_element,'');reposition_tooltip(ac,myevent,bottom,true,tooltip_element,force_width);}else
{tooltip_element=win.document.createElement('div');tooltip_element.role='tooltip';tooltip_element.style.display='none';tooltip_element.className='tooltip boxless_space';if(ac.className.substr(0,3)=='tt_')
{tooltip_element.className+=' '+ac.className;}
tooltip_element.style.width=width;if((height)&&(height!='auto'))
{tooltip_element.style.maxHeight=height;tooltip_element.style.overflow='auto';}
tooltip_element.style.position='absolute';tooltip_element.id=Math.floor(Math.random()*1000);ac.tooltipId=tooltip_element.id;reposition_tooltip(ac,myevent,bottom,true,tooltip_element,force_width);document.body.appendChild(tooltip_element);}
if(pic)
{var img=win.document.createElement('img');img.src=pic;img.className='tooltip_img';if(lights_off)img.className+=' faded_tooltip_img';tooltip_element.appendChild(img);tooltip_element.className+=' tooltip_with_img';}
var myevent_copy;try{myevent_copy={'pageX':myevent.pageX,'pageY':myevent.pageY,'clientX':myevent.clientX,'clientY':myevent.clientY,'type':myevent.type};}
catch(e){myevent_copy={'pageX':0,'pageY':0,'clientX':0,'clientY':0,'type':''};}
var bi=document.getElementById('main_website_inner');if(!bi)bi=document.body;if((typeof window.TouchEvent!='undefined')&&(!bi.onmouseover))
{bi.onmouseover=function(){return true;};}
window.setTimeout(function(){if(!ac.is_over)return;if((!ac.tooltip_on)||(tooltip_element.childNodes.length==0))
set_inner_html(tooltip_element,tooltip,true);ac.tooltip_on=true;tooltip_element.style.display='block';if(!no_delay)
{myevent_copy.pageX=win.mouseX;myevent_copy.pageY=win.mouseY;}
reposition_tooltip(ac,myevent_copy,bottom,true,tooltip_element,force_width,win);},no_delay?0:666);}
function reposition_tooltip(ac,event,bottom,starting,tooltip_element,force_width,win)
{if(typeof win=='undefined')var win=window;if((!starting)||(browser_matches('opera')))
{if(ac.getAttribute('title'))ac.setAttribute('title','');if((ac.parentNode.nodeName.toLowerCase()=='a')&&(ac.parentNode.getAttribute('title'))&&((ac.nodeName.toLowerCase()=='abbr')||(ac.parentNode.getAttribute('title').indexOf('(this link will open in a new window)')!=-1)))
ac.parentNode.setAttribute('title','');}
if(!page_loaded)return;if(!ac.tooltipId){if((typeof ac.onmouseover!='undefined')&&(ac.onmouseover))ac.onmouseover(event);return;};if((typeof tooltip_element=='undefined')||(!tooltip_element))var tooltip_element=document.getElementById(ac.tooltipId);if(tooltip_element)
{var width=find_width(tooltip_element);if((tooltip_element.style.maxWidth)&&(tooltip_element.style.maxWidth.indexOf('px')!=-1))width=window.parseInt(tooltip_element.style.maxWidth.replace('px',''));if(tooltip_element.style.width.indexOf('px')!=-1)width=window.parseInt(tooltip_element.style.width.replace('px',''));if((!width)||((tooltip_element.style.width=='auto')&&(width<200)))width=360;var height=find_height(tooltip_element);var style__offset_x=18;var style__offset_y=18;var x,y;x=get_mouse_x(event,win);y=get_mouse_y(event,win);x+=style__offset_x;y+=style__offset_y;try
{if(typeof event.type!='undefined')
{if(event.type!='focus')ac.done_none_focus=true;if((event.type=='focus')&&(ac.done_none_focus))return;x=(event.type=='focus')?(get_window_scroll_x(win)+get_window_width(win)/2):(get_mouse_x(event,win)+style__offset_x);y=(event.type=='focus')?(get_window_scroll_y(win)+get_window_height(win)/2-40):(get_mouse_y(event,win)+style__offset_y);}}
catch(ignore){};try
{if((typeof event.target!='undefined')||(typeof event.srcElement!='undefined'))
{if(((typeof event.target!='undefined')?event.target:event.srcElement).ownerDocument!=win.document)
{x=win.mouseX+style__offset_x;y=win.mouseY+style__offset_y;}}}
catch(ignore){};if(!force_width)
{tooltip_element.style.maxWidth=width+'px';tooltip_element.style.width='auto';}else
{tooltip_element.style.width=width+'px';}
var _width=find_width(tooltip_element);if((_width==0)||(_width>width))_width=width;var x_excess=x-get_window_width(win)-get_window_scroll_x(win)+_width+20;if(x_excess>0)
{x-=x_excess+20;}
if(x<0)x=0;if(bottom)
{tooltip_element.style.top=(y-height)+'px';}else
{var y_excess=y-get_window_height(win)-get_window_scroll_y(win)+height+10;if(y_excess>0)y-=y_excess;var scroll_y=get_window_scroll_y(win);if(y<scroll_y)y=scroll_y;tooltip_element.style.top=y+'px';}
tooltip_element.style.left=x+'px';}}
function deactivate_tooltip(ac,event)
{ac.is_over=false;if((!page_loaded)||(!ac.tooltipId))return;var tooltip_element=document.getElementById(ac.tooltipId);if(tooltip_element)tooltip_element.style.display='none';}
function resize_frame(name,minHeight)
{if(typeof minHeight=='undefined')var minHeight=0;var frame_element=document.getElementById(name);var frame_window;if(typeof window.frames[name]!='undefined')frame_window=window.frames[name];else if(parent&&parent.frames[name])frame_window=parent.frames[name];else return;if((frame_element)&&(frame_window)&&(frame_window.document)&&(frame_window.document.body))
{var h=get_window_scroll_height(frame_window);if((h==0)&&(frame_element.parentNode.style.display=='none'))
{h=((typeof minHeight=='undefined')||(minHeight==0))?100:minHeight;if(frame_window.parent)window.setTimeout(function(){if(frame_window.parent)frame_window.parent.trigger_resize();},0);}
if(h+'px'!=frame_element.style.height)
{if(frame_element.scrolling!='auto')
{frame_element.style.height=((h>=minHeight)?h:minHeight)+'px';if(frame_window.parent)window.setTimeout(function(){if(frame_window.parent)frame_window.parent.trigger_resize();},0);frame_element.scrolling='no';frame_window.onscroll=function(event){if(typeof event=='undefined')var event=window.event;if(event==null)return false;try{frame_window.scrollTo(0,0);}catch(e){};return cancel_bubbling(event);};}}}}
function trigger_resize(and_subframes)
{if(typeof window.parent=='undefined')return;if(typeof window.parent.document=='undefined')return;var frames=window.parent.document.getElementsByTagName('iframe');var done=false;for(var i=0;i<frames.length;i++)
{if((frames[i].src==window.location.href)||(frames[i].contentWindow==window)||((typeof window.parent.frames[frames[i].id]!='undefined')&&(window.parent.frames[frames[i].id]==window)))
{if(frames[i].style.height=='900px')frames[i].style.height='auto';window.parent.resize_frame(frames[i].name);}}
if(and_subframes)
{frames=document.getElementsByTagName('iframe');for(var i=0;i<frames.length;i++)
if((frames[i].name!='')&&((frames[i].className.indexOf('expandable_iframe')!=-1)||(frames[i].className.indexOf('dynamic_iframe')!=-1)))resize_frame(frames[i].name);}}
function add_form_marked_posts(work_on,prefix)
{var get=work_on.method.toLowerCase()=='get';var elements=document.getElementsByTagName('input');var i;var append='';if(get)
{for(i=0;i<work_on.elements.length;i++)
{if(work_on.elements[i].name.match(new RegExp('&'+prefix.replace('_','\_')+'\d+=1$','g')))
{work_on.elements[i].parentNode.removeChild(work_on.elements[i]);}}}else
{work_on.action=work_on.action.replace('?','&');work_on.action=work_on.action.replace(new RegExp('&'+prefix.replace('_','\_')+'\d+=1$','g'),'');work_on.action=work_on.action.replace('&','?');}
for(i=0;i<elements.length;i++)
{if((elements[i].type=='checkbox')&&(elements[i].name.substring(0,prefix.length)==prefix)&&(elements[i].checked))
append+=(((append=='')&&(work_on.action.indexOf('?')==-1)&&(work_on.action.indexOf('/pg/')==-1)&&(!get))?'?':'&')+elements[i].name+'=1';}
if(get)
{var bits=append.split('&');for(i=0;i<bits.length;i++)
{if(bits[i]!='')
{var hidden=document.createElement('input');hidden.name=bits[i].substr(0,bits[i].indexOf('=1'));hidden.value='1';hidden.type='hidden';work_on.appendChild(hidden);}}}else
{work_on.action+=append;}
return append!='';}
function mark_all_topics(event)
{var e=document.getElementsByTagName('input');var i;for(i=0;i<e.length;i++)
{if((e[i].type=='checkbox')&&(e[i].name.substr(0,5)=='mark_'))
{e[i].checked=!e[i].checked;e[i].onclick(event);}}}
function set_opacity(element,fraction)
{if((typeof element.fader_key!='undefined')&&(element.fader_key)&&(typeof window.fade_transition_timers!='undefined')&&(window.fade_transition_timers[element.fader_key]))
{try
{window.clearTimeout(window.fade_transition_timers[element.fader_key]);}
catch(e){};window.fade_transition_timers[element.fader_key]=null;}
if(typeof element.style.opacity!='undefined')
{element.style.opacity=fraction;element.style.filter='alpha(opacity='+(fraction*100)+')';return;}}
function add_event_listener_abstract(element,the_event,func,capture)
{if(element)
{if((element==window)&&((the_event=='load')&&((page_fully_loaded)||(document.readyState=='complete')))||((the_event=='real_load')&&(document.readyState=='complete')))
{window.setTimeout(func,0);return true;}
if(typeof element.simulated_events=='undefined')element.simulated_events=[];try
{if(typeof element.simulated_events[the_event]=='undefined')element.simulated_events[the_event]=[];element.simulated_events[the_event].push(func);}
catch(e)
{element.simulated_events=[];element.simulated_events[the_event]=[];element.simulated_events[the_event].push(func);}
if(typeof element.addEventListener!='undefined')
{if(the_event=='load')
{element.addEventListener('DOMContentLoaded',function(){window.has_DOMContentLoaded=true;window.setTimeout(func,0);},capture);return element.addEventListener(the_event,function(){if(typeof window.has_DOMContentLoaded=='undefined')window.setTimeout(func,0);},capture);}
if(the_event=='real_load')the_event='load';return element.addEventListener(the_event,func,capture);}
else if(typeof element.attachEvent!='undefined')
{if(the_event=='real_load')the_event='load';return element.attachEvent("on"+the_event,func);}
else return false;}
else return false;}
function cancel_bubbling(event,for_element)
{if((typeof for_element=='undefined')||(!for_element))var for_element='';if(typeof event=='undefined')var event=window.event;if(typeof event=='undefined'||!event)return false;var src=(typeof event.srcElement!='undefined'&&event.srcElement)?event.srcElement:event.target;if(!src)return false;if((src.nodeName)&&(src.nodeName.toLowerCase()==for_element)||(for_element==''))
{if(typeof event.stopPropagation!='undefined')event.stopPropagation();event.cancelBubble=true;return true;}
return false;}
function maintain_theme_in_link(url)
{if(url.indexOf('&utheme=')!=-1)return url;if(url.indexOf('?utheme=')!=-1)return url;if(url.indexOf('&keep_theme=')!=-1)return url;if(url.indexOf('?keep_theme=')!=-1)return url;if(typeof window.ocp_theme=='undefined')window.ocp_theme='default';if(typeof window.ocp_theme!='undefined')
{if(url.indexOf('?')==-1)url+='?';else url+='&';url+='utheme='+window.encodeURIComponent(window.ocp_theme);}
return url;}
function keep_stub(starting_query_string)
{var to_add='',i;var search=(window.location.search=='')?'?':window.location.search.substr(1);var bits=search.split('&');var done_session=false;var gap_symbol;for(i=0;i<bits.length;i++)
{if(bits[i].substr(0,5)=='keep_')
{gap_symbol=(((to_add=='')&&(starting_query_string))?'?':'&');to_add=to_add+gap_symbol+bits[i];if(bits[i].substr(0,13)=='keep_session=')done_session=true;}}
if(!done_session)
{var session=read_cookie('ocp_session');gap_symbol=(((to_add=='')&&(starting_query_string))?'?':'&');if(session)to_add=to_add+gap_symbol+'keep_session='+window.encodeURIComponent(session);}
return to_add;}
function get_outer_html(element)
{return get_inner_html(element,true);}
function get_inner_html(element,outerToo)
{function inner_html_copy(src_dom_node,level){var out='';if(typeof level=='undefined')level=1;if(level>1){if(src_dom_node.nodeType==1){var this_node=document.createElement(src_dom_node.nodeName);out+='<'+this_node.nodeName;var cleaned_attributes=[];for(var a=0,attr=src_dom_node.attributes.length;a<attr;a++){var a_name=src_dom_node.attributes[a].name,a_value=src_dom_node.attributes[a].value;cleaned_attributes[a_name]=a_value;}
for(var a=0,attr=src_dom_node.attributes.length;a<attr;a++){var a_name=src_dom_node.attributes[a].name,a_value=cleaned_attributes[a_name];if((a_value!==null)&&(a_name!='complete')&&(a_name!='simulated_events')&&(((a_name.substr(0,2)!='on')&&(a_name!='cite')&&(a_name!='nofocusrect')&&(a_name!='width')&&(a_name!='height')&&(a_name!='cache')&&(a_name!='dataFld')&&(a_name!='dataFormatAs')&&(a_name!='dataSrc')&&(a_name!='implementation')&&(a_name!='style'))||(a_value!='null'))&&((a_name!='start')||(a_value!='fileopen'))&&((a_name!='loop')||(a_value!='1'))&&(((a_name!='width')&&(a_name!='height')&&(a_name!='tabIndex')&&(a_name!='hspace')&&(a_name!='vspace'))||(a_value!='0'))&&(((a_name!='noWrap')&&(a_name!='readOnly')&&(a_name!='indeterminate')&&(a_name!='hideFocus')&&(a_name!='disabled')&&(a_name!='isMap'))||(a_value!='false'))&&((a_name!='contentEditable')||(a_value!='inherit'))&&(((a_name.substr(0,6)!='border')&&(a_name!='dateTime')&&(a_name!='scope')&&(a_name!='clear')&&(a_name!='bgColor')&&(a_name!='vAlign')&&(a_name!='chOff')&&(a_name!='ch')&&(a_name!='height')&&(a_name!='width')&&(a_name!='axis')&&(a_name!='headers')&&(a_name!='background')&&(a_name!='accept')&&(a_name!='language')&&(a_name!='longDesc')&&(a_name!='border')&&(a_name!='dataFld')&&(a_name!='dataFormatAs')&&(a_name!='dataSrc')&&(a_name!='lang')&&(a_name!='id')&&(a_name!='name')&&(a_name!='dir')&&(a_name!='accessKey')&&(a_name!='dynsrc')&&(a_name!='vrml')&&(a_name!='align')&&(a_name!='useMap')&&(a_name!='lowsrc'))||(a_value!='')))
out+=' '+a_name+'="'+escape_html(a_value)+'"';}
if(src_dom_node.childNodes.length>0)
{out+='>';for(var i=0,j=src_dom_node.childNodes.length;i<j;i++)
{if((src_dom_node.childNodes[i].id!='_firebugConsole')&&(src_dom_node.childNodes[i].type!='application/x-googlegears'))
out+=inner_html_copy(src_dom_node.childNodes[i],level+1);}
out+='</'+this_node.nodeName+'>';}else
{out+=' />';}}
else if(src_dom_node.nodeType==3){out+=(src_dom_node.nodeValue?src_dom_node.nodeValue:"");}
else if(src_dom_node.nodeType==4){out+=(src_dom_node.nodeValue?"<![CDATA["+src_dom_node.nodeValue+"]]":"");}}else
{for(var i=0,j=src_dom_node.childNodes.length;i<j;i++)
{if((src_dom_node.childNodes[i].id!='_firebugConsole')&&(src_dom_node.childNodes[i].type!='application/x-googlegears'))
out+=inner_html_copy(src_dom_node.childNodes[i],level+1);}}
return out;}
return inner_html_copy(element,outerToo?2:1);}
function entities_to_unicode(din)
{if((!din.replace)||(din.indexOf('&')==-1))return din;if(typeof window.entity_rep_reg=='undefined')
{var reps={'amp':38,'gt':62,'lt':60,'quot':34,'hellip':8230,'middot':183,'ldquo':8220,'lsquo':8216,'rdquo':8221,'rsquo':8217,'mdash':8212,'ndash':8211,'nbsp':160,'times':215,'harr':8596,'lsaquo':8249,'rsaquo':8250,'euro':8364,'pound':163,'bull':8226,'copy':169,'trade':8482,'dagger':8224,'yen':165,'laquo':171,'raquo':187,'larr':8592,'rarr':8594,'uarr':8593,'darr':8595,'acute':180,'cedil':184,'circ':710,'macr':175,'tilde':732,'uml':168,'Aacute':193,'aacute':225,'Acirc':194,'acirc':226,'AElig':198,'aelig':230,'Agrave':192,'agrave':224,'Aring':197,'aring':229,'Atilde':195,'atilde':227,'Auml':196,'auml':228,'Ccedil':199,'ccedil':231,'Eacute':201,'eacute':233,'Ecirc':202,'ecirc':234,'Egrave':200,'egrave':232,'ETH':208,'eth':240,'Euml':203,'euml':235,'Iacute':205,'iacute':237,'Icirc':206,'icirc':238,'Igrave':204,'igrave':236,'Iuml':207,'iuml':239,'Ntilde':209,'ntilde':241,'Oacute':211,'oacute':243,'Ocirc':212,'ocirc':244,'OElig':338,'oelig':339,'Ograve':210,'ograve':242,'Oslash':216,'oslash':248,'Otilde':213,'otilde':245,'Ouml':214,'ouml':246,'Scaron':352,'scaron':353,'szlig':223,'THORN':222,'thorn':254,'Uacute':218,'uacute':250,'Ucirc':219,'ucirc':251,'Ugrave':217,'ugrave':249,'Uuml':220,'uuml':252,'Yacute':221,'yacute':253,'yuml':255,'Yuml':376,'cent':162,'curren':164,'brvbar':166,'Dagger':8225,'frasl':8260,'iexcl':161,'image':8465,'iquest':191,'lrm':8206,'not':172,'oline':8254,'ordf':170,'ordm':186,'para':182,'permil':8240,'prime':8242,'Prime':8243,'real':8476,'reg':174,'rlm':8207,'sect':167,'shy':173,'sup1':185,'weierp':8472,'bdquo':8222,'sbquo':8218,'emsp':8195,'ensp':8194,'thinsp':8201,'zwj':8205,'zwnj':8204,'deg':176,'divide':247,'frac12':189,'frac14':188,'frac34':190,'ge':8805,'le':8804,'minus':8722,'sup2':178,'sup3':179,'alefsym':8501,'and':8743,'ang':8736,'asymp':8776,'cap':8745,'cong':8773,'cup':8746,'empty':8709,'equiv':8801,'exist':8707,'fnof':402,'forall':8704,'infin':8734,'int':8747,'isin':8712,'lang':9001,'lceil':8968,'lfloor':8970,'lowast':8727,'micro':181,'nabla':8711,'ne':8800,'ni':8715,'notin':8713,'nsub':8836,'oplus':8853,'or':8744,'otimes':8855,'part':8706,'perp':8869,'plusmn':177,'prod':8719,'prop':8733,'radic':8730,'rang':9002,'rceil':8969,'rfloor':8971,'sdot':8901,'sim':8764,'sub':8834,'sube':8838,'sum':8721,'sup':8835,'supe':8839,'there4':8756,'Alpha':913,'alpha':945,'Beta':914,'beta':946,'Chi':935,'chi':967,'Delta':916,'delta':948,'Epsilon':917,'epsilon':949,'Eta':919,'eta':951,'Gamma':915,'gamma':947,'Iota':921,'iota':953,'Kappa':922,'kappa':954,'Lambda':923,'lambda':955,'Mu':924,'mu':956,'Nu':925,'nu':957,'Omega':937,'omega':969,'Omicron':927,'omicron':959,'Phi':934,'phi':966,'Pi':928,'pi':960,'piv':982,'Psi':936,'psi':968,'Rho':929,'rho':961,'Sigma':931,'sigma':963,'sigmaf':962,'Tau':932,'tau':964,'Theta':920,'theta':952,'thetasym':977,'upsih':978,'Upsilon':933,'upsilon':965,'Xi':926,'xi':958,'Zeta':918,'zeta':950,'crarr':8629,'dArr':8659,'hArr':8660,'lArr':8656,'rArr':8658,'uArr':8657,'clubs':9827,'diams':9830,'hearts':9829,'spades':9824,'loz':9674};window.entity_rep_reg={};for(var i in reps)
{window.entity_rep_reg['&#'+reps[i]+';']=i;}}
var i;for(var x in window.entity_rep_reg)
{i=window.entity_rep_reg[x];if(typeof i=='string')
{if((i=='acute')&&(!din.match(/&\w+;/)))break;i=new RegExp('&'+i+';','g');window.entity_rep_reg[x]=i;}
din=din.replace(window.entity_rep_reg[x],x);}
return din;}
function inner_html_load(xml_string){var xml;if(typeof DOMParser!='undefined')
{try
{xml=(new DOMParser()).parseFromString(xml_string,"application/xml");}
catch(e){xml=null;};if((xml===null)||((typeof xml.documentElement!='undefined')&&(typeof xml.documentElement.childNodes[0]!='undefined')&&(xml.documentElement.childNodes[0].nodeName=='parsererror')))
{xml=document.implementation.createHTMLDocument('');var doc_elt=xml.documentElement;doc_elt.innerHTML=xml_string;xml=xml.getElementsByTagName('root')[0];}}else
{var ieDOM=["MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"];for(var i=0;i<ieDOM.length&&!xml;i++){try{xml=new ActiveXObject(ieDOM[i]);xml.loadXML(xml_string);}
catch(e){}}}
return xml;}
function inner_html_copy(dom_node,xml_doc,level,script_tag_dependencies){if(typeof level=='undefined')level=1;if(level>1){var node_upper=xml_doc.nodeName.toUpperCase();if((node_upper=='SCRIPT')&&(!xml_doc.getAttribute('src')))
{var text=(xml_doc.nodeValue?xml_doc.nodeValue:(xml_doc.textContent?xml_doc.textContent:(xml_doc.text?xml_doc.text:"")));if(script_tag_dependencies['to_load'].length==0)
{window.setTimeout(function(){if(typeof window.execScript!='undefined')
{window.execScript(text);}else
{eval.call(window,text);}},0);}else
{script_tag_dependencies['to_run'].push(text);}
return;}
if(xml_doc.nodeType==1){var this_node=dom_node.ownerDocument.createElement(xml_doc.nodeName);for(var a=0,attr=xml_doc.attributes.length;a<attr;a++){var a_name=xml_doc.attributes[a].name,a_value=xml_doc.attributes[a].value,evt=(a_name.substr(0,2)=="on");if(!evt){switch(a_name){case"class":this_node.className=a_value;break;case"for":this_node.htmlFor=a_value;break;default:this_node.setAttribute(a_name,a_value);}}else this_node[a_name]=eval('var x=function(event) { '+a_value+' }; x;');}
if((node_upper=='SCRIPT')||(node_upper=='LINK'))
{if(node_upper=='SCRIPT')
{script_tag_dependencies['to_load'].push(this_node);this_node.onload=this_node.onreadystatechange=function(){if((typeof this_node.readyState=='undefined')||(this_node.readyState=='complete')||(this_node.readyState=='loaded'))
{var found=0,i;for(i=0;i<script_tag_dependencies['to_load'].length;i++)
{if(script_tag_dependencies['to_load'][i]===this_node)
delete script_tag_dependencies['to_load'][i];else if(typeof script_tag_dependencies['to_load'][i]!=='undefined')found++;}
if(found==0)
{for(i=0;i<script_tag_dependencies['to_run'].length;i++)
{if(typeof window.execScript!='undefined')
{window.execScript(script_tag_dependencies['to_run'][i]);}else
{eval.call(window,script_tag_dependencies['to_run'][i]);}}
script_tag_dependencies['to_run']=[];}}};}
dom_node=document.getElementsByTagName('head')[0].appendChild(this_node);}else
{dom_node=dom_node.appendChild(this_node);var _new_html__initialise=function(){var found=0,i;for(i=0;i<script_tag_dependencies['to_load'].length;i++)
{if(script_tag_dependencies['to_load'][i]===this_node)
delete script_tag_dependencies['to_load'][i];else if(typeof script_tag_dependencies['to_load'][i]!=='undefined')found++;}
if(found==0)
{try
{new_html__initialise(this_node);}
catch(e){};}
else
window.setTimeout(_new_html__initialise,0);};window.setTimeout(_new_html__initialise,0);}}
else if(xml_doc.nodeType==3){var text=(xml_doc.nodeValue?xml_doc.nodeValue:(xml_doc.textContent?xml_doc.textContent:(xml_doc.text?xml_doc.text:"")));var test=text.replace(/^\s*|\s*$/g,"");if(test.indexOf("<!--")!=0&&(test.length<=3||test.indexOf("-->")!=(test.length-3)))
{if((dom_node.nodeName=='STYLE')&&(!dom_node.ownerDocument.createCDATASection))
{dom_node.cssText=text;}else
{dom_node.appendChild(dom_node.ownerDocument.createTextNode(text));}
dom_node=null;}}
else if(xml_doc.nodeType==4){var text=(xml_doc.nodeValue?xml_doc.nodeValue:(xml_doc.textContent?xml_doc.textContent:(xml_doc.text?xml_doc.text:"")));if((dom_node.nodeName=='STYLE')&&(!dom_node.ownerDocument.createCDATASection))
{dom_node.cssText=text;}else
{dom_node.appendChild(dom_node.ownerDocument.createTextNode(text));}
dom_node=null;}}
if(dom_node)
{for(var i=0,j=xml_doc.childNodes.length;i<j;i++)
{if((xml_doc.childNodes[i].id!='_firebugConsole')&&(xml_doc.childNodes[i].type!='application/x-googlegears'))
inner_html_copy.call(window,dom_node,xml_doc.childNodes[i],level+1,script_tag_dependencies);}}}
function set_outer_html(element,tHTML)
{var p=element.parentNode;p.removeChild(element);set_inner_html(element,tHTML,false,true);var c=element.childNodes,ci;for(var i=c.length-1;i>=0;i--)
{ci=c[i];element.removeChild(ci);if(element.nextSibling)
{p.insertBefore(ci,element.nextSibling);}else
{p.appendChild(ci);}}}
function set_inner_html(element,tHTML,append)
{if(typeof tHTML=='number')tHTML=tHTML+'';if((document.write)&&(typeof element.innerHTML!='undefined')&&(!document.xmlVersion)&&(tHTML.toLowerCase().indexOf('<script type="text/javascript src="')==-1)&&(tHTML.toLowerCase().indexOf('<link')==-1))
{var clone=element.cloneNode(true);try
{var scripts_jump=0,already_offset=0;if(append)
{scripts_jump=element.getElementsByTagName('script').length;element.innerHTML+=tHTML;already_offset=element.getElementsByTagName('*').length}else
{element.innerHTML=tHTML;}
window.setTimeout(function(){var elements=element.getElementsByTagName('*');var length=elements.length;for(var i=already_offset;i<length;i++)
{new_html__initialise(elements[i]);}},0);if(tHTML.toLowerCase().indexOf('<script')!=-1)
{window['js_runs_test_'+r_id]=false;var r_id='js_'+Math.random();element.innerHTML+='<script id="'+r_id+'" type="text/javascript">window[\'js_runs_test_'+r_id+'\']=true;</script>';window.setTimeout(function(){if(!window['js_runs_test_'+r_id])
{var scripts=element.getElementsByTagName('script');for(var i=scripts_jump;i<scripts.length;i++)
{if(!scripts[i].src)
{var text=(scripts[i].nodeValue?scripts[i].nodeValue:(scripts[i].textContent?scripts[i].textContent:(scripts[i].text?scripts[i].text.replace(/^<script[^>]*>/,''):"")));if(typeof window.execScript!='undefined')
{window.execScript(text);}else
{eval.call(window,text);}}}
window['js_runs_test_'+r_id]=true;}else
{var r=document.getElementById(r_id);r.parentNode.removeChild(r);}},0);}
return;}
catch(ignore){};}
tHTML=entities_to_unicode(tHTML);tHTML="<root>"+tHTML.replace(/^\s*\<\!DOCTYPE[^<>]*\>/,'')+"</root>";var xml_doc=inner_html_load(tHTML);if(element&&xml_doc){if(!append)while(element.lastChild)element.removeChild(element.lastChild);var script_tag_dependencies={'to_run':[],'to_load':[]};inner_html_copy.call(window,element,(typeof xml_doc.documentElement=='undefined')?xml_doc:xml_doc.documentElement,1,script_tag_dependencies);}}
function careful_import_node(node)
{var imported;try{imported=(document.importNode)?document.importNode(node,true):null;}catch(e){};if(!imported)imported=node;return imported;}
function apply_rating_highlight_and_ajax_code(likes,initial_rating,content_type,id,type,rating,content_url,content_title,initialisation_phase)
{var i,bit;for(i=1;i<=10;i++)
{bit=document.getElementById('rating_bar_'+i+'__'+content_type+'__'+type+'__'+id);if(!bit)continue;if(likes)
{bit.className=(rating==i)?'rating_star_highlight':'rating_star';}else
{bit.className=(rating>=i)?'rating_star_highlight':'rating_star';}
if(initialisation_phase)
{bit.onmouseover=function(i){return function()
{apply_rating_highlight_and_ajax_code(likes,initial_rating,content_type,id,type,i,content_url,content_title,false);}}(i);bit.onmouseout=function(i){return function()
{apply_rating_highlight_and_ajax_code(likes,initial_rating,content_type,id,type,initial_rating,content_url,content_title,false);}}(i);bit.onclick=function(i){return function(){var template='';var bit=document.getElementById('rating_bar_'+i+'__'+content_type+'__'+type+'__'+id);var replace_spot=bit;while(replace_spot!==null)
{replace_spot=replace_spot.parentNode;if(replace_spot!==null&&replace_spot.className)
{if(replace_spot.className.match(/^RATING_BOX( |$)/))
{template='RATING_BOX';break;}
if(replace_spot.className.match(/^RATING_INLINE_STATIC( |$)/))
{template='RATING_INLINE_STATIC';break;}
if(replace_spot.className.match(/^RATING_INLINE_DYNAMIC( |$)/))
{template='RATING_INLINE_DYNAMIC';break;}}}
var snippet_request='rating&type='+window.encodeURIComponent(type)+'&id='+window.encodeURIComponent(id)+'&content_type='+window.encodeURIComponent(content_type)+'&template='+window.encodeURIComponent(template)+'&content_url='+window.encodeURIComponent(content_url)+'&content_title='+window.encodeURIComponent(content_title);var message=load_snippet(snippet_request,'rating='+window.encodeURIComponent(i),function(ajax_result){var message=ajax_result.responseText;set_inner_html((template=='')?bit.parentNode.parentNode.parentNode.parentNode:replace_spot,(template=='')?('<strong>'+message+'</strong>'):message.replace(/^\s*<[^<>]+>/,'').replace(/<\/[^<>]+>\s*$/,''));});return false;}}(i);}}}
function click_link(link)
{var cancelled=false;var backup=link.onclick;link.onclick=function(e){if(typeof e=='undefined')var e=window.event;cancel_bubbling(e);};if((typeof document.createEvent!='undefined')&&(document.createEvent))
{var event=document.createEvent('MouseEvents');event.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,false,false,0,null);cancelled=!link.dispatchEvent(event);}
else if(typeof link.fireEvent!='undefined')
{cancelled=!link.fireEvent('onclick');}
link.onclick=backup;if((!cancelled)&&(link.href))
{if(link.getAttribute('target'))window.open(link.href,link.getAttribute('target'));window.location=link.href;}}
function handle_comments_posting_form_submit(button,event)
{var form;if(typeof button.form=='undefined')
{form=window.form_submitting;}else
{form=button.form;}
form.setAttribute('target','_top');if(typeof form.old_action!='undefined')form.setAttribute('action',form.old_action);if(form.onsubmit.call(form,event))
{disable_button_just_clicked(document.getElementById('submit_button'));form.submit();}}
function move_to_full_editor(button,more_url)
{var form;if(typeof button.form=='undefined')
{form=window.form_submitting;}else
{form=button.form;}
if(typeof form.elements['post'].default_substring_to_strip!='undefined')
{if(typeof form.elements['stub']!='undefined')
{form.elements['stub'].value=form.elements['post'].default_substring_to_strip;}else
{if(more_url.indexOf('?')==-1)
{more_url+='?';}else
{more_url+='&';}
more_url+='stub='+window.encodeURIComponent(form.elements['post'].default_substring_to_strip);}}
form.setAttribute('target','_top');if(typeof form.old_action!='undefined')form.old_action=form.getAttribute('action');form.setAttribute('action',more_url);if((typeof form.elements['post'].strip_on_focus!='undefined')&&(form.elements['post'].value==form.elements['post'].strip_on_focus))
form.elements['post'].value='';form.submit();}
function replace_comments_form_with_ajax(options,hash)
{var comments_form=document.getElementById('comments_form');if(comments_form)
{comments_form.old_onsubmit=comments_form.onsubmit;comments_form.onsubmit=function(event){if(typeof event=='undefined')var event=window.event;event.returnValue=false;if(typeof event.preventDefault!='undefined')event.preventDefault();if(!comments_form.old_onsubmit(event))return false;var comments_wrapper=document.getElementById('comments_wrapper');if(!comments_wrapper)
{comments_form.submit();return true;}
disable_button_just_clicked(document.getElementById('submit_button'));var known_posts=get_elements_by_class_name(comments_wrapper,'post');var known_times=[];for(var i=0;i<known_posts.length;i++)
{known_times.push(known_posts[i].className.replace(/^post /,''));}
var post='options='+window.encodeURIComponent(options)+'&hash='+window.encodeURIComponent(hash);var post_element=comments_form.elements['post'];var post_value=post_element.value;if(typeof post_element.default_substring_to_strip!='undefined')
{if(post_value.substring(0,post_element.default_substring_to_strip.length)==post_element.default_substring_to_strip)
post_value=post_value.substring(post_element.default_substring_to_strip.length,post_value.length);}
for(var i=0;i<comments_form.elements.length;i++)
{if((comments_form.elements[i].name)&&(comments_form.elements[i].name!='post'))
post+='&'+comments_form.elements[i].name+'='+window.encodeURIComponent(clever_find_value(comments_form,comments_form.elements[i]));}
post+='&post='+window.encodeURIComponent(post_value);do_ajax_request('http://localhost:47370//data/post_comment.php'+keep_stub(true),function(ajax_result){if((ajax_result.responseText!='')&&(ajax_result.status!=500))
{set_outer_html(comments_wrapper,ajax_result.responseText);window.setTimeout(function(){var comments_wrapper=document.getElementById('comments_wrapper');smooth_scroll(find_pos_y(comments_wrapper,true));},0);if(document.getElementById('comments_posting_form_outer').className.indexOf('toggleable_tray')!=-1)
toggleable_tray('comments_posting_form_outer');var known_posts=get_elements_by_class_name(comments_wrapper,'post');for(var i=0;i<known_posts.length;i++)
{if(!known_times.inArray(known_posts[i].className.replace(/^post /,'')))
{set_opacity(known_posts[i],0.0);fade_transition(known_posts[i],100,20,5);}}
replace_comments_form_with_ajax(options,hash);}else
{comments_form.submit();}},post);return false;};}}
function topic_reply(is_threaded,ob,id,replying_to_username,replying_to_post,replying_to_post_plain)
{var form=document.getElementById('comments_form');var parent_id_field;if(typeof form.elements['parent_id']=='undefined')
{parent_id_field=document.createElement('input');parent_id_field.type='hidden';parent_id_field.name='parent_id';form.appendChild(parent_id_field);}else
{parent_id_field=form.elements['parent_id'];if(typeof window.last_reply_to!='undefined')set_opacity(window.last_reply_to,1.0);}
window.last_reply_to=ob;parent_id_field.value=is_threaded?id:'';ob.className+=' activated_quote_button';var post=form.elements['post'];smooth_scroll(find_pos_y(form,true));if(document.getElementById('comments_posting_form_outer').style.display=='none')
toggleable_tray('comments_posting_form_outer');if(is_threaded)
{post.value='Click to type your reply to {1}\'s message, which was:\n\n{2}'.replace(/\{1\}/g,replying_to_username).replace(/\{2\}/g,replying_to_post_plain);post.strip_on_focus=post.value;post.style.color='';}else
{if(typeof post.strip_on_focus!='undefined'&&post.value==post.strip_on_focus)
post.value='';else if(post.value!='')post.value+='\n\n';post.focus();post.value+='[quote="'+replying_to_username+'"]\n'+replying_to_post+'\n[snapback]'+id+'[/snapback][/quote]\n\n';}
manage_scroll_height(post);post.scrollTop=post.scrollHeight;return false;}
function threaded_load_more(ob,ids,id)
{load_snippet('comments&id='+window.encodeURIComponent(id)+'&ids='+window.encodeURIComponent(ids)+'&serialized_options='+window.encodeURIComponent(window.comments_serialized_options)+'&hash='+window.encodeURIComponent(window.comments_hash),null,function(ajax_result){var wrapper;if(id!='')
{wrapper=document.getElementById('post_children_'+id);}else
{wrapper=ob.parentNode;}
ob.parentNode.removeChild(ob);set_inner_html(wrapper,ajax_result.responseText,true);window.setTimeout(function(){if(typeof window.fade_transition!='undefined')
{var _ids=ids.split(',');for(var i=0;i<_ids.length;i++)
{var element=document.getElementById('post_wrap_'+_ids[i]);if(element)
{set_opacity(element,0);fade_transition(element,100,30,10);}}}},0);});return false;}
function setup_word_counter(post,count_element)
{window.setInterval(function(){if(is_wysiwyg_field(post))
{try
{var text_value=window.CKEDITOR.instances['post'].getData();var matches=text_value.replace(/<[^<|>]+?>|&nbsp;/gi,' ').match(/\b/g);var count=0;if(matches)count=matches.length/2;set_inner_html(count_element,'{1} words'.replace('{1}',count));}
catch(e){};}},1000);}
function add_captcha_validation(form)
{form.old_submit=form.onsubmit;form.onsubmit=function()
{form.elements['submit_button'].disabled=true;var url='http://localhost:47370//data/snippet.php?snippet=captcha_wrong&name='+window.encodeURIComponent(form.elements['captcha'].value);if(!do_ajax_field_test(url))
{form.elements['captcha'].src+='&';document.getElementById('submit_button').disabled=false;return false;}
form.elements['submit_button'].disabled=false;if(typeof form.old_submit!='undefined'&&form.old_submit)return form.old_submit();return true;};var showevent=(typeof window.onpageshow!='undefined')?'pageshow':'load';add_event_listener_abstract(window,showevent,function(){form.elements['captcha'].src+='&';});}
function set_up_change_monitor(id)
{add_event_listener_abstract(window,'load',function(){if(typeof window._set_up_change_monitor!='undefined')
{var ch=(typeof id=='string')?document.getElementById(id):id;if(ch)_set_up_change_monitor(ch.parentNode);}});}
window.overlay_zIndex=999999;function open_link_as_overlay(ob,width,height,target)
{if((typeof width=='undefined')||(!width))var width=800;if((typeof height=='undefined')||(!height))var height=520;var url=(typeof ob.href=='undefined')?ob.action:ob.href;if((typeof target=='undefined')||(!target))var target='_top';faux_open(url+((url.indexOf('?')==-1)?'?':'&')+'wide_high=1',null,'width='+width+';height='+height,target);return false;}
function open_image_into_lightbox(a)
{var lightbox_code='<p class="ajax_tree_list_loading"><img id="lightbox_image" src="http://localhost:47370//themes/default/images/loading.gif" /></p>';var has_full_button=(typeof a.childNodes[0]=='undefined')||(a.href!==a.childNodes[0].src);if(has_full_button)
lightbox_code+='<p class="associated_link associated_links_block_group"><a href="'+escape_html(a.href)+'" target="_blank" title="See full image (this link will open in a new window)">See full image</a></p>';var myLightbox={type:'lightbox',text:lightbox_code,yes_button:'Close',width:450,height:300};var modal=new ModalWindow();modal.open(myLightbox);window.setTimeout(function(){var img=modal.topWindow.document.createElement('img');img.onload=function()
{if(!modal.box)return;var real_width=img.width;var width=real_width;var real_height=img.height;var height=real_height;var dims_func=function()
{var max_width=modal.topWindow.get_window_width()-20;var max_height=modal.topWindow.get_window_height()-(has_full_button?180:60);if(width>max_width)
{width=max_width;height=window.parseInt(max_width*real_height/real_width-1);}
if(height>max_height)
{width=window.parseInt(max_height*real_width/real_height-1);height=max_height;}
modal.resetDimensions(width,height);img.width=width;img.height=height;if(img.parentNode)
{img.parentNode.parentNode.parentNode.style.width='auto';img.parentNode.parentNode.parentNode.style.height='auto';}};var lightbox_image=modal.topWindow.document.getElementById('lightbox_image');var sup=lightbox_image.parentNode.parentNode;sup.removeChild(lightbox_image.parentNode);if(sup.childNodes.length!=0)
{sup.insertBefore(img,sup.childNodes[0]);}else
{sup.appendChild(img);}
sup.className='';sup.style.textAlign='center';sup.style.overflow='hidden';dims_func();modal.addEvent(window,'resize',function(){dims_func();});}
img.src=a.href;},0);}
function fauxmodal_confirm(question,callback,title)
{if(typeof title=='undefined')var title='Are you sure you want to proceed?';var myConfirm={type:'confirm',text:escape_html(question).replace(/\n/g,'<br />'),yes_button:'Yes',no_button:'No',title:title,yes:function(){callback(true);},no:function(){callback(false);},width:450};new ModalWindow().open(myConfirm);}
function fauxmodal_alert(notice,callback,title)
{if((typeof callback=='undefined')||(!callback))var callback=function(){};if(typeof title=='undefined')var title='Message';var myAlert={type:'alert',text:escape_html(notice).replace(/\n/g,'<br />'),yes_button:'Okay',width:600,yes:callback,title:title};new ModalWindow().open(myAlert);}
function fauxmodal_prompt(question,defaultValue,callback,title,input_type)
{var myPrompt={type:'prompt',text:escape_html(question).replace(/\n/g,'<br />'),yes_button:'Okay',cancel_button:'Cancel',defaultValue:(defaultValue===null)?'':defaultValue,title:title,yes:function(value){callback(value);},cancel:function(){callback(null);},width:450};if(input_type)myPrompt.input_type=input_type;new ModalWindow().open(myPrompt);}
function faux_showModalDialog(url,name,options,callback,target,cancel_text)
{if((typeof callback=='undefined')||(!callback))var callback=function(){};var width=null,height=null,scrollbars=null,unadorned=null;if(typeof cancel_text=='undefined')var cancel_text='Cancel';if(options)
{var parts=options.split(/[;,]/g);for(var i=0;i<parts.length;i++)
{var bits=parts[i].split('=');if(typeof bits[1]!='undefined')
{if((bits[0]=='dialogWidth')||(bits[0]=='width'))
width=window.parseInt(bits[1].replace(/px$/,''));if((bits[0]=='dialogHeight')||(bits[0]=='height'))
{if(bits[1]=='100%')
{height=get_window_height()-200;}else
{height=window.parseInt(bits[1].replace(/px$/,''));}}
if(((bits[0]=='resizable')||(bits[0]=='scrollbars'))&&scrollbars!==true)
scrollbars=((bits[1]=='yes')||(bits[1]=='1'));if(bits[0]=='unadorned')unadorned=((bits[1]=='yes')||(bits[1]=='1'));}}}
if(url.indexOf(window.location.host)!=-1)
{url+=((url.indexOf('?')==-1)?'?':'&')+'overlay=1';}
var myFrame={type:'iframe',finished:function(value){callback(value);},name:name,width:width,height:height,scrollbars:scrollbars,href:url.replace(/^https?:/,window.location.protocol)};myFrame.cancel_button=(unadorned!==true)?cancel_text:null;if(target)myFrame.target=target;new ModalWindow().open(myFrame);}
function faux_open(url,name,options,target,cancel_text)
{if(typeof cancel_text=='undefined')var cancel_text='Close';faux_showModalDialog(url,name,options,null,target,cancel_text);}
function ModalWindow()
{return{box:null,returnValue:null,topWindow:null,open:function(){var options=arguments[0]||{};var defaults={'type':'alert','opacity':'0.5','width':null,'height':'auto','title':'','text':'','yes_button':'Yes','no_button':'No','cancel_button':'Cancel','yes':null,'no':null,'finished':null,'cancel':null,'href':null,'scrollbars':null,'defaultValue':null,'target':'_self','input_type':'text'};this.topWindow=window.top;this.topWindow=this.topWindow.top;for(var key in defaults){this[key]=(typeof options[key]!='undefined')?options[key]:defaults[key];}
this.close(this.topWindow);this.initBox();},close:function(win){if(this.box){this.remove(this.box,win);this.box=null;this.removeEvent(document,'keyup',this.keyup);}
this.opened=false;},option:function(method){var win=this.topWindow;if(this[method]){if(this.type=='prompt'){this[method](this.input.value);}
else if(this.type=='iframe'){this[method](this.returnValue);}
else this[method]();}
this.close(win);},resetDimensions:function(width,height){if(!this.box)return;var dim=this.getPageSize();if(width>dim.pageWidth)width=dim.pageWidth-30;var boxWidth=((width)?(width+8):(dim.pageWidth/4))+'px';var extra_box_height=(this.type=='iframe')?160:((this.type=='lightbox')?26:120);if(this.cancel_button===null)extra_box_height=0;var boxHeight=(typeof height=='string'||height===null||this.type=='iframe')?'auto':(height+extra_box_height)+'px';var boxPosVCentre=(typeof height=='string'||height===null||this.type=='iframe')?((this.type=='iframe')?20:150):((dim.windowHeight/2.5)-(parseInt(boxHeight)/2));if(boxPosVCentre<20)boxPosVCentre=20;var boxPosHCentre=((dim.pageWidth/2)-(parseInt(boxWidth)/2));var boxPosTop=(boxPosVCentre)+'px';var boxPosLeft=boxPosHCentre+'px';this.width=width;this.height=height;this.box.childNodes[0].style.width=boxWidth;this.box.childNodes[0].style.height=boxHeight;this.box.childNodes[0].style.top=boxPosTop;this.box.childNodes[0].style.left=boxPosLeft;var iframe=this.box.getElementsByTagName('iframe');if(typeof iframe[0]!='undefined')
{iframe[0].style.width=this.width?(this.width+'px'):'100%';iframe[0].style.height=this.width?(this.height+'px'):'50%';}
if(((boxHeight=='auto')&&('0'==1))||(height>dim.windowHeight))
{if(!browser_matches('ios')&&!browser_matches('android'))
{this.box.childNodes[0].style.position='absolute';this.box.childNodes[0].style.top='0';}
try
{this.topWindow.scrollTo(0,0);}
catch(e){};}},initBox:function(){var dim=this.getPageSize();this.box=this.element('div',{'styles':{'background':'rgba(0,0,0,0.7)','zIndex':this.topWindow.overlay_zIndex++,'overflow':'hidden','position':(browser_matches('android')||browser_matches('ios'))?'absolute':'fixed','left':'0','top':'0','width':'100%','height':(browser_matches('android')||browser_matches('ios'))?'auto':(((dim.pageHeight>dim.windowHeight)?dim.pageHeight:dim.windowHeight)+'px')}});this.box.appendChild(this.element('div',{'class':'box overlay','role':'dialog','styles':{'position':(browser_matches('android')||browser_matches('ios'))?'static':'fixed','margin':'0 auto'}}));var _this=this;var width=this.width;var height=this.height;this.resetDimensions(this.width,this.height);this.addEvent(window,'resize',function(){_this.resetDimensions(width,height);});this.inject(this.box);var container=this.element('div',{'class':'box_inner','styles':{'width':'auto','height':'auto'}});var overlay_header=null;if(this.title!=''||this.type=='iframe'){overlay_header=this.element('h3',{'html':this.title,'styles':{'display':(this.title=='')?'none':'block'}});container.appendChild(overlay_header);}
if(this.text!=''){if(this.type=='prompt')
{var div=this.element('div');div.appendChild(this.element('label',{'for':'overlay_prompt','html':this.text}));container.appendChild(div);}else
{container.appendChild(this.element('div',{'html':this.text}));}}
var buttonContainer=this.element('div',{'class':'proceed_button'});var _this=this;this.clickout_cancel=function(){_this.option('cancel');};this.clickout_finished=function(){_this.option('finished');};this.clickout_yes=function(){_this.option('yes');};this.keyup=function(e){if(!e)e=window.event;var keyCode=(e)?(e.which||e.keyCode):null;if(keyCode==13){_this.option('yes');}};this.addEvent(this.box.childNodes[0],'click',function(e){try{_this.topWindow.cancel_bubbling(e);}catch(e){};});switch(this.type){case'iframe':var iframe=this.element('iframe',{'frameBorder':'0','scrolling':(browser_matches('ie')||browser_matches('gecko'))?'auto':'no','title':'','name':'overlay_iframe','id':'overlay_iframe','allowTransparency':'true','styles':{'width':this.width?(this.width+'px'):'100%','height':this.height?(this.height+'px'):'50%','background':'transparent'}});container.appendChild(iframe);if(this.cancel_button)
{var button=this.element('button',{'html':this.cancel_button,'class':'button_pageitem'});this.addEvent(button,'click',function(){_this.option('finished');});buttonContainer.appendChild(button);container.appendChild(this.element('hr',{'class':'spaced_rule'}));container.appendChild(buttonContainer);}
window.setTimeout(function(){_this.addEvent(_this.box,'click',_this.clickout_finished);},1000);this.addEvent(iframe,'load',function(){if(typeof iframe.contentWindow.document.getElementsByTagName('h1')[0]=='undefined'&&typeof iframe.contentWindow.document.getElementsByTagName('h2')[0]=='undefined')
{if(iframe.contentWindow.document.title!='')
{set_inner_html(overlay_header,escape_html(iframe.contentWindow.document.title));overlay_header.style.display='block';}}});var name=this.name;var makeFrameLikePopup=function(){if((iframe)&&(iframe.contentWindow)&&(iframe.contentWindow.document)&&(iframe.contentWindow.document.body)&&(typeof iframe.contentWindow.document.body.done_popup_trans=='undefined'))
{iframe.contentWindow.document.body.style.background='transparent';if(iframe.contentWindow.document.body.className.indexOf('overlay')==-1)
iframe.contentWindow.document.body.className+=' overlay';iframe.scrolling=(_this.scrollbars===false)?'no':'auto';var main_website_inner=iframe.contentWindow.document.getElementById('main_website_inner');if(main_website_inner)main_website_inner.id='';var main_website=iframe.contentWindow.document.getElementById('main_website');if(main_website)main_website.id='';var popup_spacer=iframe.contentWindow.document.getElementById('popup_spacer');if(popup_spacer)popup_spacer.id='';var bases=iframe.contentWindow.document.getElementsByTagName('base');var baseElement;if(!bases[0])
{baseElement=iframe.contentWindow.document.createElement('base');if(iframe.contentWindow.document)
{var heads=iframe.contentWindow.document.getElementsByTagName('head');if(heads[0])
{heads[0].appendChild(baseElement);}}}else
{baseElement=bases[0];}
baseElement.target=_this.target;var forms=iframe.contentWindow.document.getElementsByTagName('form');for(var i=0;i<forms.length;i++)
{if(!forms[i].target)forms[i].target=_this.target;}
var as=iframe.contentWindow.document.getElementsByTagName('a');for(var i=0;i<as.length;i++)
{if(!as[i].target)as[i].target=_this.target;}
if(name&&iframe.contentWindow.name!=name)iframe.contentWindow.name=name;if(typeof iframe.contentWindow.faux_close=='undefined')
{iframe.contentWindow.faux_close=function(){if(iframe&&iframe.contentWindow&&typeof iframe.contentWindow.returnValue!='undefined')
_this.returnValue=iframe.contentWindow.returnValue;_this.option('finished');};}
if(get_inner_html(iframe.contentWindow.document.body).length>300)
iframe.contentWindow.document.body.done_popup_trans=true;}};window.setTimeout(function(){illustrate_frame_load(iframe,'overlay_iframe');iframe.src=_this.href;makeFrameLikePopup();},0);window.setInterval(makeFrameLikePopup,100);break;case'lightbox':case'alert':if(this.yes!=false){var button=this.element('button',{'html':this.yes_button,'class':'button_pageitem'});this.addEvent(button,'click',function(){_this.option('yes');});window.setTimeout(function(){_this.addEvent(_this.box,'click',_this.clickout_yes);},1000);buttonContainer.appendChild(button);container.appendChild(buttonContainer);}
break;case'confirm':var button=this.element('button',{'html':this.yes_button,'class':'button_pageitem','style':'font-weight: bold;'});this.addEvent(button,'click',function(){_this.option('yes');});buttonContainer.appendChild(button);var button=this.element('button',{'html':this.no_button,'class':'button_pageitem'});this.addEvent(button,'click',function(){_this.option('no');});buttonContainer.appendChild(button);container.appendChild(buttonContainer);break;case'prompt':this.input=this.element('input',{'name':'prompt','id':'overlay_prompt','type':this.input_type,'size':'40','class':'wide_field','value':(this.defaultValue===null)?'':this.defaultValue});var input_wrap=this.element('div',{'class':'constrain_field'});input_wrap.appendChild(this.input);container.appendChild(input_wrap);if(this.yes){var button=this.element('button',{'html':this.yes_button,'class':'button_pageitem','style':'font-weight: bold;'});this.addEvent(button,'click',function(){_this.option('yes');});buttonContainer.appendChild(button);}
var button=this.element('button',{'html':this.cancel_button,'class':'button_pageitem'});this.addEvent(button,'click',function(){_this.option('cancel');});window.setTimeout(function(){_this.addEvent(_this.box,'click',_this.clickout_cancel);},1000);buttonContainer.appendChild(button);container.appendChild(buttonContainer);break;}
this.box.childNodes[0].appendChild(container);if(this.input)
{window.setTimeout(function(){_this.input.focus();},0);}
else if(typeof this.box.getElementsByTagName('button')[0]!='undefined')
{this.box.getElementsByTagName('button')[0].focus();}
if(this.yes||this.yes!=false)
{window.setTimeout(function(){_this.addEvent(document,'keyup',_this.keyup);},100);}},inject:function(el){this.topWindow.document.body.appendChild(el);},remove:function(el,win){if(!win)win=this.topWindow;win.document.body.removeChild(el);},element:function(){var tag=arguments[0],options=arguments[1];var el=this.topWindow.document.createElement(tag);var attributes={'html':'innerHTML','class':'className','for':'htmlFor','text':'innerText'};if(options){if(typeof options=='object'){for(var name in options){var value=options[name];if(name=='styles'){this.setStyles(el,value);}else if(name=='html'){set_inner_html(el,value);}else if(attributes[name]){el[attributes[name]]=value;}else{el.setAttribute(name,value);}}}}
return el;},addEvent:function(o,e,f){if(o){if(o.addEventListener)o.addEventListener(e,f,false);else if(o.attachEvent)o.attachEvent('on'+e,f);}},removeEvent:function(o,e,f){if(o){if(o.removeEventListener)o.removeEventListener(e,f,false);else if(o.detachEvent)o.detachEvent('on'+e,f);}},setStyles:function(e,o){for(var k in o){this.setStyle(e,k,o[k]);}},setStyle:function(e,p,v){if(p=='opacity'){this.topWindow.set_opacity(e,v);}else{try
{e.style[p]=v;}
catch(e){};}},getPageSize:function(){return{'pageWidth':this.topWindow.get_window_width(this.topWindow),'pageHeight':this.topWindow.get_window_scroll_height(this.topWindow),'windowWidth':this.topWindow.get_window_width(),'windowHeight':this.topWindow.get_window_height()};}};}