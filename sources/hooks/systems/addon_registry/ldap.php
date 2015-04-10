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
 * @package		ldap
 */

class Hook_addon_registry_ldap
{
	/**
	 * Get a list of file permissions to set
	 *
	 * @return array			File permissions to set
	 */
	function get_chmod_array()
	{
		return array();
	}

	/**
	 * Get the version of ocPortal this addon is for
	 *
	 * @return float			Version number
	 */
	function get_version()
	{
		return ocp_version_number();
	}

	/**
	 * Get the description of the addon
	 *
	 * @return string			Description of the addon
	 */
	function get_description()
	{
		return 'Support for integrating OCF with an LDAP server, so usergroup and members can be the same as those already on the network';
	}

	/**
	 * Get a mapping of dependency types
	 *
	 * @return array			File permissions to set
	 */
	function get_dependencies()
	{
		return array(
			'requires'=>array(),
			'recommends'=>array(),
			'conflicts_with'=>array()
		);
	}

	/**
	 * Get a list of files that belong to this addon
	 *
	 * @return array			List of files
	 */
	function get_file_list()
	{
		return array(
			'sources/hooks/systems/config_default/ldap_allow_joining.php',
			'sources/hooks/systems/config_default/ldap_base_dn.php',
			'sources/hooks/systems/config_default/ldap_bind_password.php',
			'sources/hooks/systems/config_default/ldap_bind_rdn.php',
			'sources/hooks/systems/config_default/ldap_group_class.php',
			'sources/hooks/systems/config_default/ldap_group_search_qualifier.php',
			'sources/hooks/systems/config_default/ldap_hostname.php',
			'sources/hooks/systems/config_default/ldap_is_enabled.php',
			'sources/hooks/systems/config_default/ldap_is_windows.php',
			'sources/hooks/systems/config_default/ldap_login_qualifier.php',
			'sources/hooks/systems/config_default/ldap_member_class.php',
			'sources/hooks/systems/config_default/ldap_member_property.php',
			'sources/hooks/systems/config_default/ldap_member_search_qualifier.php',
			'sources/hooks/systems/config_default/ldap_none_bind_logins.php',
			'sources/hooks/systems/config_default/ldap_version.php',
			'sources/hooks/systems/config_default/windows_auth_is_enabled.php',
			'sources/hooks/systems/addon_registry/ldap.php',
			'OCF_LDAP_LIST_ENTRY.tpl',
			'OCF_LDAP_SYNC_SCREEN.tpl',
			'adminzone/pages/modules/admin_ocf_ldap.php',
			'sources/ocf_ldap.php',
			'themes/default/images/bigicons/ldap.png',
			'themes/default/images/pagepics/ldap.png',
			'sources/hooks/systems/do_next_menus/ldap.php'
		);
	}


	/**
	 * Get mapping between template names and the method of this class that can render a preview of them
	 *
	 * @return array			The mapping
	 */
	function tpl_previews()
	{
		return array(
			'OCF_LDAP_LIST_ENTRY.tpl'=>'administrative__ocf_ldap_sync_screen',
			'OCF_LDAP_SYNC_SCREEN.tpl'=>'administrative__ocf_ldap_sync_screen'
		);
	}

	/**
	 * Get a preview(s) of a (group of) template(s), as a full standalone piece of HTML in Tempcode format.
	 * Uses sources/lorem.php functions to place appropriate stock-text. Should not hard-code things, as the code is intended to be declaritive.
	 * Assumptions: You can assume all Lang/CSS/Javascript files in this addon have been pre-required.
	 *
	 * @return array			Array of previews, each is Tempcode. Normally we have just one preview, but occasionally it is good to test templates are flexible (e.g. if they use IF_EMPTY, we can test with and without blank data).
	 */
	function tpl_preview__administrative__ocf_ldap_sync_screen()
	{
		require_lang('ocf');
		$members_delete=new ocp_tempcode();
		foreach (placeholder_array() as $k=>$v)
		{
			$tpl=do_lorem_template('OCF_LDAP_LIST_ENTRY', array(
				'NAME'=>lorem_word() . placeholder_random(),
				'NICE_NAME'=>lorem_word()
			));
			$members_delete->attach($tpl);
		}

		$groups_delete=new ocp_tempcode();
		foreach (placeholder_array() as $k=>$v)
		{
			$tpl=do_lorem_template('OCF_LDAP_LIST_ENTRY', array(
				'NAME'=>lorem_word() . placeholder_random(),
				'NICE_NAME'=>lorem_word()
			));
			$groups_delete->attach($tpl);
		}

		$groups_add=new ocp_tempcode();
		foreach (placeholder_array() as $k=>$v)
		{
			$tpl=do_lorem_template('OCF_LDAP_LIST_ENTRY', array(
				'NAME'=>lorem_word() . placeholder_random(),
				'NICE_NAME'=>lorem_word()
			));
			$groups_add->attach($tpl);
		}

		return array(
			lorem_globalise(do_lorem_template('OCF_LDAP_SYNC_SCREEN', array(
				'URL'=>placeholder_url(),
				'TITLE'=>lorem_title(),
				'MEMBERS_DELETE'=>$members_delete,
				'GROUPS_DELETE'=>$groups_delete,
				'GROUPS_ADD'=>$groups_add
			)), NULL, '', true)
		);
	}
}
