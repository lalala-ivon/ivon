require 'erb' 

erb_list = Dir["*.erb"] 
page_names = erb_list.collect do |erb_file| 
  erb_file.split('.')[0] 
end 

page_names.each do |page_name| 
  template = ERB.new(File.read("#{page_name}.erb")) 
  html_content = template.result(binding) 

  html_page = "../#{page_name}.html" 

  File.open(html_page, "w") do |file| 
    file.puts html_content 
  end 
end 
