import React from 'react';
import s from './Main.module.css'
import '../../css/bootstrap.min.css';

const Main = () => {
    return (
        <div className={s.main}>
            <main >
         
         
            <div class="row">
				<div class="col-md-6">
					<div class="row g-0 border text-white rounded bg-primary overflow-hidden flex-md-row mt-2 mb-2 shadow-sm h-md-250 position-relative">
						<div class="col p-4 d-flex flex-column position-static">
							<h3 class="mb-0">2023</h3>
							<p class="card-text mb-auto">год проведения опроса</p>

						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row g-0 border text-white rounded bg-success overflow-hidden flex-md-row mt-2 mb-2 shadow-sm h-md-250 position-relative">
						<div class="col p-4 d-flex flex-column position-static">
							<h3 class="mb-0">7728</h3>
							<p class="card-text mb-auto">количество опрошенных</p>

						</div>
					</div>
				</div>
			</div>
  


            <div class="row">
				<div class="col-md-6">
					<div class="row g-0 border rounded overflow-hidden flex-md-row mt-2 mb-2 shadow-sm h-md-250 position-relative">
						<div class="col p-3 d-flex flex-column position-static">
							<h3 class="mb-2 text-primary">Участники опроса</h3>
							<div class="table-responsive">
								<table class="table table-striped table-sm">
									<thead>
									<tr>
										<th>#</th>
										<th>Форма обучения</th>
										<th>Количество</th>
									</tr>
									</thead>
									<tbody>
																											<tr>
										<td>1</td>
										<td>Заочная</td>
										<td>151</td>
									</tr>
																		<tr>
										<td>2</td>
										<td>Заочная с ДОТ</td>
										<td>36</td>
									</tr>
																		<tr>
										<td>3</td>
										<td>Очная</td>
										<td>7368</td>
									</tr>
																		<tr>
										<td>4</td>
										<td>Очно-Заочная</td>
										<td>173</td>
									</tr>
																		</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row g-0 border rounded overflow-hidden flex-md-row mt-2 mb-2 shadow-sm h-md-250 position-relative">
						<div class="col p-3 d-flex flex-column position-static">
							<h3 class="mb-2 text-success">Участники опроса</h3>
							<div class="table-responsive">
								<table class="table table-striped table-sm">
									<thead>
									<tr>
										<th>#</th>
										<th>Уровень образования</th>
										<th>Количество</th>
									</tr>
									</thead>
									<tbody>
																											<tr>
										<td>1</td>
										<td>Бакалавриат</td>
										<td>5263</td>
									</tr>
																		<tr>
										<td>2</td>
										<td>Магистратура</td>
										<td>616</td>
									</tr>
																		<tr>
										<td>3</td>
										<td>ПКВК (аспирантура)</td>
										<td>134</td>
									</tr>
																		<tr>
										<td>4</td>
										<td>Специалитет</td>
										<td>1095</td>
									</tr>
																		<tr>
										<td>5</td>
										<td>Среднее профессиональное образование</td>
										<td>620</td>
									</tr>
																		</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div class="row">
					<div class="col-md-6">
						<div class="row g-0 border rounded overflow-hidden flex-md-row mt-2 mb-2 shadow-sm h-md-250 position-relative">
							<div class="col p-3 d-flex flex-column position-static">
								<h3 class="mb-2 text-primary">Распределение по структурным подразделениям</h3>
								<div class="table-responsive">
									<table class="table table-striped table-sm">
										<thead>
										<tr>
											<th>#</th>
											<th>Структурные подразделения</th>
											<th>Опрошено</th>
											<th>Всего</th>
										</tr>
										</thead>
										<tbody>
																															<tr>
												<td>1</td>
												<td>Высшая биотехнологическая школа</td>
												<td>206</td>
												<td>436</td>
											</tr>
																					<tr>
												<td>2</td>
												<td>Инженерно-технологический факультет</td>
												<td>367</td>
												<td>790</td>
											</tr>
																					<tr>
												<td>3</td>
												<td>Институт автоматики и информационных технологий</td>
												<td>1160</td>
												<td>1865</td>
											</tr>
																					<tr>
												<td>4</td>
												<td>Институт инженерно-экономического и гуманитарного образования</td>
												<td>502</td>
												<td>1367</td>
											</tr>
																					<tr>
												<td>5</td>
												<td>Институт нефтегазовых технологий</td>
												<td>606</td>
												<td>4860</td>
											</tr>
																					<tr>
												<td>6</td>
												<td>Колледж СамГТУ</td>
												<td>590</td>
												<td>809</td>
											</tr>
																					<tr>
												<td>7</td>
												<td>Строительно-технологический факультет</td>
												<td>292</td>
												<td>476</td>
											</tr>
																					<tr>
												<td>8</td>
												<td>Теплоэнергетический факультет</td>
												<td>839</td>
												<td>1417</td>
											</tr>
																					<tr>
												<td>9</td>
												<td>Управление подготовки научных кадров</td>
												<td>134</td>
												<td>334</td>
											</tr>
																					<tr>
												<td>10</td>
												<td>Факультет архитектуры и дизайна</td>
												<td>568</td>
												<td>857</td>
											</tr>
																					<tr>
												<td>11</td>
												<td>Факультет инженерных систем и природоохранного строительства</td>
												<td>265</td>
												<td>740</td>
											</tr>
																					<tr>
												<td>12</td>
												<td>Факультет машиностроения, металлургии и транспорта</td>
												<td>311</td>
												<td>837</td>
											</tr>
																					<tr>
												<td>13</td>
												<td>Факультет промышленного и гражданского строительства</td>
												<td>394</td>
												<td>1513</td>
											</tr>
																					<tr>
												<td>14</td>
												<td>Филиал ФГБОУ ВО "СамГТУ" в г. Белебее</td>
												<td>218</td>
												<td>619</td>
											</tr>
																					<tr>
												<td>15</td>
												<td>Филиал ФГБОУ ВО "СамГТУ" в г. Новокуйбышевске</td>
												<td>124</td>
												<td>854</td>
											</tr>
																					<tr>
												<td>16</td>
												<td>Филиал ФГБОУ ВО "СамГТУ" в г. Сызрани</td>
												<td>374</td>
												<td>1332</td>
											</tr>
																					<tr>
												<td>17</td>
												<td>Химико-технологический факультет</td>
												<td>418</td>
												<td>793</td>
											</tr>
																					<tr>
												<td>18</td>
												<td>Электротехнический факультет</td>
												<td>360</td>
												<td>1185</td>
											</tr>
																				</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row g-0 border rounded overflow-hidden flex-md-row mt-2 mb-2 shadow-sm h-md-250 position-relative">
							<div class="col p-3 d-flex flex-column position-static">
								<h3 class="mb-2 text-primary">Распределение по кафедрам</h3>
								<div class="table-responsive">
									<table class="table table-striped table-sm">
										<thead>
										<tr>
											<th>#</th>
											<th>Кафедра</th>
											<th>Опрошено</th>
											<th>Всего</th>
											<th>%</th>
											<th></th>
										</tr>
										</thead>
										<tbody>
																															<tr>
												<td>1</td>
												<td>Высшая биотехнологическая школа</td>
												<td>207</td>
												<td>437</td>
												<td>48</td>
												<td>
													
												</td>
											</tr>
																					<tr>
												<td>2</td>
												<td>кафедра "Автоматизация и управление технологическими процессами"</td>
												<td>132</td>
												<td>344</td>
												<td>39</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>3</td>
												<td>кафедра "Автоматизированные электроэнергетические системы"</td>
												<td>36</td>
												<td>186</td>
												<td>20</td>
												<td>
													
												</td>
											</tr>
																					<tr>
												<td>4</td>
												<td>кафедра "Автоматика и управление в технических системах"</td>
												<td>139</td>
												<td>193</td>
												<td>73</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>5</td>
												<td>Кафедра "Автомобильные дороги и геодезическое сопровождение строительства"</td>
												<td>45</td>
												<td>196</td>
												<td>23</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>6</td>
												<td>кафедра "Аналитическая и физическая химия"</td>
												<td>2</td>
												<td>4</td>
												<td>50</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>7</td>
												<td>Кафедра "Архитектура жилых и общественных зданий"</td>
												<td>90</td>
												<td>132</td>
												<td>69</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>8</td>
												<td>Кафедра "Архитектура"</td>
												<td>107</td>
												<td>173</td>
												<td>62</td>
												<td>
													
												</td>
											</tr>
																					<tr>
												<td>9</td>
												<td>Кафедра "Архитектурно-строительная графика и изобразительное искусство"</td>
												<td>11</td>
												<td>18</td>
												<td>62</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>10</td>
												<td>кафедра "Бурение нефтяных и газовых скважин"</td>
												<td>119</td>
												<td>1757</td>
												<td>7</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>11</td>
												<td>Кафедра "Водоснабжение и водоотведение"</td>
												<td>131</td>
												<td>249</td>
												<td>53</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>12</td>
												<td>кафедра "Высшая математика"</td>
												<td>0</td>
												<td>5</td>
												<td>0</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>13</td>
												<td>кафедра "Вычислительная техника"</td>
												<td>294</td>
												<td>569</td>
												<td>52</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>14</td>
												<td>кафедра "Газопереработка, водородные и специальные технологии"</td>
												<td>31</td>
												<td>106</td>
												<td>30</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>15</td>
												<td>кафедра "Геология и физические процессы нефтегазового производства"</td>
												<td>101</td>
												<td>256</td>
												<td>40</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>16</td>
												<td>Кафедра "Градостроительство"</td>
												<td>94</td>
												<td>139</td>
												<td>68</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>17</td>
												<td>Кафедра "Дизайн"</td>
												<td>86</td>
												<td>116</td>
												<td>75</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>18</td>
												<td>Кафедра "Железобетонные конструкции"</td>
												<td>240</td>
												<td>860</td>
												<td>28</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>19</td>
												<td>Кафедра "Инженерные технологии" филиала ФГБОУ ВО "СамГТУ" в г. Белебее Республики Башкортостан</td>
												<td>218</td>
												<td>619</td>
												<td>36</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>20</td>
												<td>Кафедра "Инновационное проектирование"</td>
												<td>98</td>
												<td>156</td>
												<td>63</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>21</td>
												<td>кафедра "Иностранные языки"</td>
												<td>0</td>
												<td>1</td>
												<td>0</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>22</td>
												<td>кафедра "Информатика и системы управления" (НФ-ИиСУ)</td>
												<td>1</td>
												<td>14</td>
												<td>8</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>23</td>
												<td>Кафедра "Информатика и системы управления" (СФ-ИиСУ)</td>
												<td>135</td>
												<td>355</td>
												<td>39</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>24</td>
												<td>кафедра "Информационно-измерительная техника"</td>
												<td>91</td>
												<td>130</td>
												<td>70</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>25</td>
												<td>кафедра "Информационные технологии"</td>
												<td>302</td>
												<td>388</td>
												<td>78</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>26</td>
												<td>кафедра "Литейные и высокоэффективные технологии"</td>
												<td>81</td>
												<td>157</td>
												<td>52</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>27</td>
												<td>кафедра "Машины и оборудование нефтегазовых и химических производств"</td>
												<td>81</td>
												<td>374</td>
												<td>22</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>28</td>
												<td>Кафедра "Металлические и деревянные конструкции"</td>
												<td>84</td>
												<td>192</td>
												<td>44</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>29</td>
												<td>кафедра "Металловедение, порошковая металлургия, наноматериалы"</td>
												<td>86</td>
												<td>128</td>
												<td>68</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>30</td>
												<td>Кафедра "Механизация, автоматизация и энергоснабжение строительства"</td>
												<td>38</td>
												<td>107</td>
												<td>36</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>31</td>
												<td>кафедра "Национальная и мировая экономика"</td>
												<td>166</td>
												<td>443</td>
												<td>38</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>32</td>
												<td>кафедра "Общая и неорганическая химия"</td>
												<td>41</td>
												<td>69</td>
												<td>60</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>33</td>
												<td>кафедра "Органическая химия"</td>
												<td>174</td>
												<td>234</td>
												<td>75</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>34</td>
												<td>кафедра "Педагогика, межкультурная коммуникация и русский как иностранный"</td>
												<td>20</td>
												<td>41</td>
												<td>49</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>35</td>
												<td>кафедра "Прикладная математика и информатика"</td>
												<td>94</td>
												<td>141</td>
												<td>67</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>36</td>
												<td>Кафедра "Природоохранное и гидротехническое строительство"</td>
												<td>100</td>
												<td>166</td>
												<td>61</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>37</td>
												<td>Кафедра "Производство строительных материалов, изделий и конструкций"</td>
												<td>36</td>
												<td>84</td>
												<td>43</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>38</td>
												<td>кафедра "Промышленная теплоэнергетика"</td>
												<td>173</td>
												<td>278</td>
												<td>63</td>
												<td>
									
												</td>
											</tr>
																					<tr>
												<td>39</td>
												<td>кафедра "Радиотехнические устройства"</td>
												<td>31</td>
												<td>113</td>
												<td>28</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>40</td>
												<td>кафедра "Разработка и эксплуатация нефтяных и газовых месторождений"</td>
												<td>119</td>
												<td>1605</td>
												<td>8</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>41</td>
												<td>Кафедра "Реконструкция и реставрация архитектурного наследия"</td>
												<td>82</td>
												<td>127</td>
												<td>65</td>
												<td>
									
												</td>
											</tr>
																					<tr>
												<td>42</td>
												<td>Кафедра "Стоимостной инжиниринг и техническая экспертиза зданий и сооружений"</td>
												<td>219</td>
												<td>293</td>
												<td>75</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>43</td>
												<td>Кафедра "Строительная механика, инженерная геология, основания и фундаменты"</td>
												<td>8</td>
												<td>160</td>
												<td>5</td>
												<td>
									
												</td>
											</tr>
																					<tr>
												<td>44</td>
												<td>кафедра "Теоретическая и общая электротехника"</td>
												<td>38</td>
												<td>79</td>
												<td>49</td>
												<td>
											
								
												</td>
											</tr>
																					<tr>
												<td>45</td>
												<td>кафедра "Теоретические основы теплотехники и гидромеханика"</td>
												<td>59</td>
												<td>86</td>
												<td>69</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>46</td>
												<td>кафедра "Тепловые электрические станции"</td>
												<td>92</td>
												<td>177</td>
												<td>52</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>47</td>
												<td>Кафедра "Теплогазоснабжение и вентиляция"</td>
												<td>36</td>
												<td>329</td>
												<td>11</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>48</td>
												<td>Кафедра "Технология и организация строительного производства"</td>
												<td>17</td>
												<td>108</td>
												<td>16</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>49</td>
												<td>Кафедра "Технология машиностроения" (СФ-ТМС)</td>
												<td>36</td>
												<td>167</td>
												<td>22</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>50</td>
												<td>кафедра "Технология машиностроения, станки и инструменты"</td>
												<td>146</td>
												<td>460</td>
												<td>32</td>
												<td>
									
												</td>
											</tr>
																					<tr>
												<td>51</td>
												<td>кафедра "Технология органического и нефтехимического синтеза"</td>
												<td>95</td>
												<td>238</td>
												<td>40</td>
                                                <td>
									
												</td>
											</tr>
																					<tr>
												<td>52</td>
												<td>кафедра "Технология твердых химических веществ"</td>
												<td>127</td>
												<td>160</td>
												<td>80</td>
												<td>
								
												</td>
											</tr>
																					<tr>
												<td>53</td>
												<td>кафедра "Техносферная безопасность и управление качеством"</td>
												<td>116</td>
												<td>336</td>
												<td>35</td>
												<td>
									
												</td>
											</tr>
																					<tr>
												<td>54</td>
												<td>кафедра "Транспортные процессы и технологические комплексы"</td>
												<td>21</td>
												<td>139</td>
												<td>16</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>55</td>
												<td>кафедра "Трубопроводный транспорт"</td>
												<td>98</td>
												<td>637</td>
												<td>16</td>
												<td>
									
												</td>
											</tr>
																					<tr>
												<td>56</td>
												<td>кафедра "Управление и системный анализ теплоэнергетических и социотехнических комплексов"</td>
												<td>528</td>
												<td>899</td>
												<td>59</td>
												<td>
							
												</td>
											</tr>
																					<tr>
												<td>57</td>
												<td>кафедра "Физика"</td>
												<td>0</td>
												<td>1</td>
												<td>0</td>
												<td>
							
												</td>
											</tr>
																					<tr>
												<td>58</td>
												<td>кафедра "Философия и социально-гуманитарные науки"</td>
												<td>4</td>
												<td>7</td>
												<td>58</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>59</td>
												<td>кафедра "Химическая технология  и промышленная экология"</td>
												<td>101</td>
												<td>268</td>
												<td>38</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>60</td>
												<td>кафедра "Химическая технология переработки нефти и газа"</td>
												<td>116</td>
												<td>278</td>
												<td>42</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>61</td>
												<td>Кафедра "Химическая технология" (СФ-ХТ)</td>
												<td>126</td>
												<td>441</td>
												<td>29</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>62</td>
												<td>кафедра "Химия и технология полимерных и композиционных материалов"</td>
												<td>68</td>
												<td>102</td>
												<td>67</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>63</td>
												<td>кафедра "Химия и химическая технология" (НФ-ХТ)</td>
												<td>62</td>
												<td>355</td>
												<td>18</td>
												<td>
								
												</td>
											</tr>
																					<tr>
												<td>64</td>
												<td>кафедра "Экономика и менеджмент" (НФ-ЭиМ)</td>
												<td>17</td>
												<td>223</td>
												<td>8</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>65</td>
												<td>кафедра "Экономика и управление организацией"</td>
												<td>71</td>
												<td>264</td>
												<td>27</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>66</td>
												<td>кафедра "Экономика промышленности и производственный менеджмент"</td>
												<td>245</td>
												<td>625</td>
												<td>40</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>67</td>
												<td>Кафедра "Экономика" (СФ-Экон)</td>
												<td>45</td>
												<td>249</td>
												<td>19</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>68</td>
												<td>кафедра "Электрические станции"</td>
												<td>124</td>
												<td>378</td>
												<td>33</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>69</td>
												<td>кафедра "Электромеханика и автомобильное электрооборудование"</td>
												<td>35</td>
												<td>136</td>
												<td>26</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>70</td>
												<td>кафедра "Электронные системы и информационная безопасность"</td>
												<td>154</td>
												<td>189</td>
												<td>82</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>71</td>
												<td>кафедра "Электропривод и промышленная автоматика"</td>
												<td>21</td>
												<td>78</td>
												<td>27</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>72</td>
												<td>кафедра "Электроснабжение промышленных предприятий"</td>
												<td>121</td>
												<td>369</td>
												<td>33</td>
												<td>
											
												</td>
											</tr>
																					<tr>
												<td>73</td>
												<td>Кафедра "Электроснабжение промышленных предприятий" (СФ-ЭПП)</td>
												<td>32</td>
												<td>120</td>
												<td>27</td>
												<td>
										
												</td>
											</tr>
																					<tr>
												<td>74</td>
												<td>кафедра "Электроэнергетика, электротехника и автоматизация технологических процессов"  (НФ- ЭЭиАТП)</td>
												<td>44</td>
												<td>262</td>
												<td>17</td>
												<td>
												
												</td>
											</tr>
																					<tr>
												<td>75</td>
												<td>Колледж СамГТУ</td>
												<td>590</td>
												<td>809</td>
												<td>73</td>
												<td>
											
												</td>
											</tr>
																				</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
            </main>






        </div>
    );
}

export default Main;
