// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import starlightAnnouncement from 'starlight-announcement'
// https://astro.build/config
export default defineConfig({
	site: 'https://rengeos.github.io',
	integrations: [
		starlight({
			title: 'RengeOS',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/RengeOS' },
				{ icon: 'email', label: 'Email', href: 'mailto:crystalforceix@gmail.com?subject=RengeOS Support&body=Hi!' },
				{ icon: 'external', label: 'Sourceforge', href: 'https://sourceforge.net/projects/rengeos' },
				{ icon: 'information', label: 'Distrowatch', href: 'https://distrowatch.com/table.php?distribution=rengeos' },
			],
			plugins: [
       		      starlightThemeGalaxy(),
				  starlightAnnouncement({ 	// Docs: https://frostybee.github.io/starlight-announcement
						announcements: [
							{
							id: 'v2-migrating',
							content: ' 🔔 Major migration work is underway for RengeOS!  <a href="/immutable-os/immutable-migration">More information →</a>',
							variant: 'tip',
							dismissible: false,
							},
						],
						}),
      			 ],
			logo: {
        			src: './public/RengeOS-logo.svg',
			replacesTitle: false,
      			},
			favicon: './favicon.ico',
			lastUpdated: true,
			customCss: [
        			'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introduction',
					items:[
						{ label: 'Overview', slug: 'introduction/overview' },
					],
					collapsed: false,
				},
				{
					label: 'Getting Started',
					items:[
						{ label: 'Getting an ISO', slug: 'getting-started/getting-an-iso' },
						{ label: 'Create Bootable USB', slug: 'getting-started/create-bootable-usb' },
					],
					collapsed: false,
				},
				{
					label: 'Installation',
					items: [
						{ label: 'Minimal ISO Installation', slug: 'installation/minimal-iso-installation'},
						{ label: 'NiriWM ISO Installation', slug: 'installation/niriwm-iso-installation'},
					],
					collapsed: false,
				},
				{
					label: 'Immutable OS (In progress)',
					items: [
						{ label: 'Immutable Migration', slug: 'immutable-os/immutable-migration'},
					],
					collapsed: false,
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'NiriWM Edition', slug: 'configuration/niriwm-edition'},
						{ label: 'Change GRUB Theme', slug:'configuration/change-grub-theme'},
						{ label: 'Enable Bcachefs Rollback', slug: 'configuration/enable-bcachefs-rollback'},
						{ label: 'Enable Compatibility Rollback (Not yet)', slug: 'configuration/enable-compatibility-rollback'},
						{ label: 'ROS-Reborn (Recovery Mode)', slug: 'configuration/ros-reborn'},
						{ label: 'ROS-Reborn-System-OTA (Recovery Mode)', slug: 'configuration/ros-reborn-system-ota'},
					],
					collapsed: true,
				},
				{
					label: 'Reference',
					items: [
						{ label: 'About Creator', slug: 'reference/about-creator'},
						{ label: 'Release Notes', slug: 'reference/release-notes'},
						{ label: 'Credits', slug: 'reference/credits'},
					],
					collapsed: false,
				},
			],
		}),
	],
});
