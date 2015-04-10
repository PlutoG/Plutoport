/* DO NOT EDIT. THIS IS A CACHE FILE AND WILL GET OVERWRITTEN RANDOMLY.
INSTEAD EDIT THE TEMPLATE FROM WITHIN THE ADMIN ZONE, OR BY MANUALLY EDITING A TEMPLATES_CUSTOM OVERRIDE. */

"use strict";function load_occle()
{if((typeof window.occle_command_response=='undefined')||(typeof window.do_ajax_request=='undefined'))
{if(document.getElementById('occle_img_loader'))
{setTimeout(load_occle,200);return false;}
var img=document.getElementById('occle_img');img.className='footer_button_loading';var tmp_element=document.createElement('img');tmp_element.src='http://localhost:47370//themes/default/images/loading.gif'.replace(/^https?:/,window.location.protocol);tmp_element.style.position='absolute';tmp_element.style.left=find_pos_x(img)+'px';tmp_element.style.top=find_pos_y(img)+'px';tmp_element.id='occle_img_loader';img.parentNode.appendChild(tmp_element);require_javascript('javascript_ajax');require_javascript('javascript_occle','occle');require_css('occle');window.setTimeout(load_occle,200);return false;}
if((typeof window.do_ajax_request!='undefined')&&(typeof window.occle_command_response!='undefined'))
{confirm_session(function(result)
{var img=document.getElementById('occle_img');var tmp_element=document.getElementById('occle_img_loader');if(tmp_element)tmp_element.parentNode.removeChild(tmp_element);if(!result)return;var occle_box=document.getElementById('occle_box');if(!occle_box)
{occle_box=document.createElement('div');occle_box.setAttribute('id','occle_box');occle_box.style.position='absolute';occle_box.style.zIndex=2000;occle_box.style.left=(get_window_width()-800)/2+'px';var top_temp=(get_window_height()-600)/2;if(top_temp<100)top_temp=100;occle_box.style.top=top_temp+'px';occle_box.style.display='none';occle_box.style.width='800px';occle_box.style.height='500px';document.body.appendChild(occle_box);set_inner_html(occle_box,load_snippet('occle'));}
if(occle_box.style.display=='none')
{occle_box.style.display='block';if(img)
{img.src='http://localhost:47370//themes/default/images/footer/occle_off.png'.replace(/^https?:/,window.location.protocol);img.className='';}
smooth_scroll(0,null,null,function(){document.getElementById('occle_command').focus();});if(typeof window.fade_transition!='undefined')
{set_opacity(document.getElementById('command_line'),0.0);fade_transition(document.getElementById('command_line'),90,30,5);}
var bi=document.getElementById('main_website_inner');if(bi)
{if(typeof window.fade_transition!='undefined')
{set_opacity(bi,1.0);fade_transition(bi,30,30,-5);}else
{set_opacity(bi,0.3);}}
document.getElementById('occle_command').focus();}
else
{if(img)
{img.src='http://localhost:47370//themes/default/images/footer/occle.png'.replace(/^https?:/,window.location.protocol);set_opacity(img,1.0);}
occle_box.style.display='none';var bi=document.getElementById('main_website_inner');if(bi)
{if(typeof window.fade_transition!='undefined')
{fade_transition(bi,100,30,5);}else
{set_opacity(bi,1.0);}}}});return false;}
var btn=document.getElementById('occle_button');if(btn)
window.location.href=btn.href;return false;}