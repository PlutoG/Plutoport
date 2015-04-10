<?php /*

 ocPortal
 Copyright (c) ocProducts, 2004-2012

 See text/EN/licence.txt for full licencing information.


 NOTE TO PROGRAMMERS:
   Do not edit this file. If you need to make changes, save your changed file to the appropriate *_custom folder
   **** If you ignore this advice, then your website upgrades (e.g. for bug fixes) will likely kill your changes ****

*/

/**
 * @license		http://opensource.org/licenses/cpal_1.0 Common Public Attribution License
 * @copyright	ocProducts Ltd
 * @package		occle
 */

class Hook_Notification_occlechat
{
	/**
	* Standard modular run function for OcCLE notification hooks.
	*
	* @param  ?integer	The "current" time on which to base queries (NULL: now)
	* @return ~array 		Array of section, type and message responses (false: nothing)
	*/
	function run($timestamp=NULL)
	{
		if (is_null($timestamp)) $timestamp=time();
		$messages=$GLOBALS['SITE_DB']->query('SELECT * FROM '.get_table_prefix().'occlechat WHERE c_incoming=1 AND c_timestamp>='.strval((integer)$timestamp));

		require_code('comcode_text');

		if (count($messages)>0)
		{
			$_messages=array();
			foreach ($messages as $message)
			{
				$_messages[apply_emoticons($message['c_message'])]=$message['c_url'];
			}
			$GLOBALS['SITE_DB']->query('DELETE FROM '.get_table_prefix().'occlechat WHERE c_timestamp>='.strval((integer)$timestamp));

			return array(do_lang('OCCLE'),do_lang('_NEW_OCCLECHAT_MESSAGES'),do_template('OCCLE_OCCLECHAT_NOTIFICATION',array('MESSAGE_COUNT'=>integer_format(count($messages)),'MESSAGES'=>$_messages)));
		}
		else return false;
	}

}

