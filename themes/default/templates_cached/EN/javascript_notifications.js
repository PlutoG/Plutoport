/* DO NOT EDIT. THIS IS A CACHE FILE AND WILL GET OVERWRITTEN RANDOMLY.
INSTEAD EDIT THE TEMPLATE FROM WITHIN THE ADMIN ZONE, OR BY MANUALLY EDITING A TEMPLATES_CUSTOM OVERRIDE. */

"use strict";function advanced_notifications_copy_under(row,num_children)
{var inputs_from=row.getElementsByTagName('input');var parent_depth=abstract_get_computed_style(row.getElementsByTagName('th')[0],'padding-left');var children_ticked=0;var child_depth=null;while(true)
{row=row.nextSibling;while(row.nodeName.toLowerCase()!='tr')
{row=row.nextSibling;if(!row)return;}
var this_child_depth=abstract_get_computed_style(row.getElementsByTagName('th')[0],'padding-left');if(child_depth==null)child_depth=this_child_depth;if(this_child_depth==parent_depth)
{break;}
var inputs_to=row.getElementsByTagName('input');for(var j=0;j<inputs_to.length;j++)
{if(inputs_to[j].type=='checkbox')
{inputs_to[j].checked=inputs_from[j].checked;}}
if(this_child_depth==child_depth)
{children_ticked++;}}}
function handle_notification_type_tick(ob,row,value)
{var elements=row.getElementsByTagName('input');if((value==-1)||(value==-2))
{for(var i=0;i<elements.length;i++)
{if((elements[i]!=ob)&&(elements[i].type=='checkbox'))
{elements[i].checked=false;}}}else
{if((typeof elements[0]!='undefined')&&(elements[0].name.indexOf('CHOICE')!=-1))
elements[0].checked=false;if((typeof elements[1]!='undefined')&&(elements[1].name.indexOf('STATISTICAL')!=-1))
elements[1].checked=false;}}