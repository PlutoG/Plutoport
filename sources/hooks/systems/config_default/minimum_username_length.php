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
 * @package		core_ocf
 */

class Hook_config_default_minimum_username_length
{

	/**
	 * Gets the details relating to the config option.
	 *
	 * @return ?array		The details (NULL: disabled)
	 */
	function get_details()
	{
		return array(
			'human_name'=>'MINIMUM_USERNAME_LENGTH',
			'the_type'=>'integer',
			'the_page'=>'SECTION_FORUMS',
			'section'=>'USERNAMES_AND_PASSWORDS',
			'explanation'=>'CONFIG_OPTION_minimum_username_length',
			'shared_hosting_restricted'=>'0',
			'c_data'=>'',

			'addon'=>'core_ocf',
		);
	}

	/**
	 * Gets the default value for the config option.
	 *
	 * @return ?string		The default value (NULL: option is disabled)
	 */
	function get_default()
	{
		return '1';
	}

}


