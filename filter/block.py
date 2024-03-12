import requests
import re

def clean_url(url):
    cleaned_url = re.sub(r'[^a-zA-Z0-9.-]', '', url.split("/")[0])
    return cleaned_url

urls_url = "https://raw.githubusercontent.com/elliotwutingfeng/GlobalAntiScamOrg-blocklist/main/global-anti-scam-org-scam-urls.txt"
urls_response = requests.get(urls_url)
urls_data = urls_response.text

ips_url = "https://raw.githubusercontent.com/elliotwutingfeng/GlobalAntiScamOrg-blocklist/main/global-anti-scam-org-scam-ips.txt"
ips_response = requests.get(ips_url)
ips_data = ips_response.text

urls_lines = urls_data.strip().split('\n')
formatted_urls = [f'HOST,{clean_url(url)}' for url in urls_lines if url]

formatted_urls_str = '\n'.join(formatted_urls)

ip_prefix_count = {}
for ip in ips_data.strip().split('\n'):
    ip = ip.strip()
    if ip:
        ip_prefix = '.'.join(ip.split('.')[:3])
        ip_prefix_count[ip_prefix] = ip_prefix_count.get(ip_prefix, 0) + 1

subnet_masks = {}
for prefix, count in ip_prefix_count.items():
    if count >= 256:
        subnet_mask = "/24"
    elif count >= 128:
        subnet_mask = "/25"
    elif count >= 64:
        subnet_mask = "/26"
    else:
        subnet_mask = "/32"
    subnet_masks[prefix] = subnet_mask

formatted_ips = []
for ip in ips_data.strip().split('\n'):
    ip = ip.strip()
    if ip:
        ip_prefix = '.'.join(ip.split('.')[:3])
        subnet_mask = subnet_masks.get(ip_prefix, "/32")
        formatted_ip = f"IP-CIDR,{ip}{subnet_mask}"
        formatted_ips.append(formatted_ip)

formatted_ips_str = '\n'.join(formatted_ips)

with open("block.list", "w", encoding="utf-8") as blocklist_file:
    blocklist_file.write(f"{formatted_urls_str}\n{formatted_ips_str}")

print("success!")
